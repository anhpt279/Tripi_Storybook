import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const releaseType = process.argv[2] || 'patch'
const allowedReleaseTypes = new Set(['current', 'major', 'minor', 'patch', 'prerelease'])

if (!allowedReleaseTypes.has(releaseType)) {
  console.error(`Invalid release type: ${releaseType}`)
  console.error('Use current, major, minor, patch, or prerelease.')
  process.exit(1)
}

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

function runNpm(args) {
  const result = spawnSync(npmCommand, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })

  if (result.error) {
    throw result.error
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

const packageJson = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
console.log(`Publishing ${packageJson.name} with a ${releaseType} release.`)

runNpm(['run', 'build:lib'])

if (releaseType !== 'current') {
  runNpm(['version', releaseType, '--no-git-tag-version'])
}

const publishArgs = ['publish', '--access', 'public']
if (process.env.NPM_OTP) {
  publishArgs.push('--otp', process.env.NPM_OTP)
}

runNpm(publishArgs)