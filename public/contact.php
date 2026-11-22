<?php
/**
 * ASJblieft – contactformulier
 * Ontvangt JSON van de website en verstuurt een e-mail via PHP mail().
 * Pas $to en $from aan indien nodig. $from moet een adres op het eigen domein zijn,
 * anders wordt de mail door veel providers als spam gezien.
 */
$to   = 'annemarie@asjblieft.nl';
$from = 'website@asjblieft.nl';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false]);
  exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) $data = $_POST;

function clean($v, $max = 2000) {
  $v = is_string($v) ? trim($v) : '';
  $v = str_replace(["\r", "\0"], '', $v);
  return mb_substr($v, 0, $max);
}
function oneline($v, $max = 200) {
  return str_replace("\n", ' ', clean($v, $max));
}

// Honeypot
if (!empty($data['website'])) { echo json_encode(['ok' => true]); exit; }

$naam     = oneline($data['naam'] ?? '');
$email    = oneline($data['email'] ?? '');
$telefoon = oneline($data['telefoon'] ?? '', 40);
$onderwerp = oneline($data['onderwerpLabel'] ?? 'Contact', 100);
$bericht  = clean($data['bericht'] ?? '', 5000);

if ($naam === '' || $bericht === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'invalid']);
  exit;
}

$subject = '=?UTF-8?B?' . base64_encode("$onderwerp – via asjblieft.nl") . '?=';
$body = "Onderwerp: $onderwerp\nNaam: $naam\nE-mail: $email\n"
      . ($telefoon !== '' ? "Telefoon: $telefoon\n" : '')
      . "\n$bericht\n";

$headers = [
  "From: ASJblieft website <$from>",
  "Reply-To: $email",
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
];

$ok = mail($to, $subject, $body, implode("\r\n", $headers));
http_response_code($ok ? 200 : 500);
echo json_encode(['ok' => $ok]);
