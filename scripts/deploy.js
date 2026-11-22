/**
 * Publiceert de map dist/ via FTPS naar de hosting.
 * Gebruik:  npm run deploy   (bouwt eerst, uploadt daarna)
 * Gegevens staan in .env.deploy (niet in git). Zie .env.deploy.example.
 */
import { readFileSync, existsSync } from 'node:fs'
import { Client } from 'basic-ftp'

function loadEnv(file) {
  if (!existsSync(file)) {
    console.error(`Bestand ${file} ontbreekt. Kopieer .env.deploy.example naar .env.deploy en vul het in.`)
    process.exit(1)
  }
  const env = {}
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
  return env
}

const env = loadEnv('.env.deploy')
for (const key of ['FTP_SERVER', 'FTP_USERNAME', 'FTP_PASSWORD']) {
  if (!env[key]) {
    console.error(`${key} ontbreekt in .env.deploy`)
    process.exit(1)
  }
}
if (!existsSync('dist')) {
  console.error('Map dist/ ontbreekt. Draai eerst npm run build.')
  process.exit(1)
}

const client = new Client()
client.ftp.verbose = false
try {
  await client.access({
    host: env.FTP_SERVER,
    user: env.FTP_USERNAME,
    password: env.FTP_PASSWORD,
    secure: true,
  })
  const remote = env.FTP_REMOTE_DIR || '/httpdocs/'
  console.log(`Uploaden naar ${env.FTP_SERVER}${remote} …`)
  await client.ensureDir(remote)
  await client.uploadFromDir('dist')
  console.log('Klaar: de site is gepubliceerd.')
} catch (err) {
  console.error('Publiceren mislukt:', err.message)
  process.exitCode = 1
} finally {
  client.close()
}
