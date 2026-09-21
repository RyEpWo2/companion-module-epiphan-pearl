const { runEntrypoint } = require('@companion-module/base')
const { EpiphanEncoder, upgradeScripts } = require('./src/instance')

runEntrypoint(EpiphanEncoder, upgradeScripts)
