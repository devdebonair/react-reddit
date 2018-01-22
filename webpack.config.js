const buildValidations = require('./build-utils/build-validations')
const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')

const addons = (/* string | string[] */ addonsArg) => {
    let addons = [...[addonsArg]].filter(Boolean)
    return addons.map(addon => require(`./build-utils/addons/webpack.${addonName}.js`))
}

module.exports = env => {
    if (!env) {
        throw new Error(buildValidations.ERR_NO_ENV_FLAG)
    }

    console.log(env.env)

    const envConfig = require(`./build-utils/webpack.${env.env}.js`)

    const mergedConfig = webpackMerge(
        commonConfig,
        envConfig,
        ...addons(env.addons)
    )

    return mergedConfig
}