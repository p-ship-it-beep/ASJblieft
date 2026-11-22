<?php
/**
 * ASJblieft – contactformulier voor gewone PHP-hosting.
 * Gebruik: zet in .env  VITE_FORM_ENDPOINT=/api/contact.php  en in site.js  provider: "php".
 *
 * $to   = ontvanger (zelfde adres als `email` in src/config/site.js)
 * $from = afzender op het eigen domein, anders komt de mail vaak in de spam
 */
$to   = 'annemarie@asjblieft.nl';
$from = 'website@asjblieft.nl';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method']);
  exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) $data = $_POST;

function veld($data, $key, $max = 200) {
  $v = isset($data[$key]) && is_string($data[$key]) ? trim($data[$key]) : '';
  $v = str_replace(["\r", "\0"], '', $v);
  return mb_substr($v, 0, $max);
}
function regel($v) { return str_replace("\n", ' ', $v); }

// Honeypot: ingevuld = bot. Doe alsof het gelukt is.
if (veld($data, 'website') !== '') {
  echo json_encode(['ok' => true]);
  exit;
}

$naam        = regel(veld($data, 'naam'));
$email       = regel(veld($data, 'email'));
$telefoon    = regel(veld($data, 'telefoon', 40));
$onderwerp   = regel(veld($data, 'onderwerp', 100));
$toelichting = veld($data, 'toelichting', 3000);

$fouten = [];
if ($naam === '') $fouten['naam'] = 'Vul je naam in.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $fouten['email'] = 'Vul een geldig e-mailadres in.';
if ($fouten) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'errors' => $fouten]);
  exit;
}

if ($onderwerp === '') $onderwerp = 'Contact';
$subject = '=?UTF-8?B?' . base64_encode("$onderwerp via asjblieft.nl") . '?=';
$body = "Onderwerp: $onderwerp\nNaam: $naam\nE-mail: $email\n"
      . ($telefoon !== '' ? "Telefoon: $telefoon\n" : '')
      . ($toelichting !== '' ? "\n$toelichting\n" : '');

$headers = implode("\r\n", [
  "From: Website ASJblieft <$from>",
  "Reply-To: $email",
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
]);

$ok = mail($to, $subject, $body, $headers);
http_response_code($ok ? 200 : 500);
echo json_encode(['ok' => $ok]);
