const { exec } = require('child_process')
const { promisify } = require('util')

const execp = promisify(exec)

function getIEVersion() {
  const cmd = 'reg query "HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Internet Explorer" /v svcVersion'

  if (process.platform !== 'win32') {
    throw new Error('This module only works on Windows')
  }

  return execp(cmd)
    .then(({ stdout } = {}) => {
      if (stdout) {
        const result = stdout
          .trim()
          .replace(/\r?\n|\r/g, '')
          .match(/.* ((\d{1,6}\.?){3,5})$/)

        if (result && result.length > 1) {
          return result[1]
        } else {
          throw new Error('Could not determine IE version from output')
        }
      } else {
        throw new Error('reg query did not return data')
      }
    })
}

module.exports = { getIEVersion }
