// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const path = require('path')
const sassVars = require(__dirname + '/mui/theme.js')
const getKeys = require('./utils/sassVariableInjector')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    functions: {
      'get($keys)': getKeys(sassVars),
    },
  },
}

module.exports = nextConfig
