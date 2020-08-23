const {
    override,
    overrideDevServer,
} = require("customize-cra");

const addWebpackConfig = () => config => {
    config.output = {
        library: 'reactApp',
        libraryTarget: 'umd',
        publicPath: 'http://localhost:9000/'
    }
    return config
}
const addDevServerConfig = () => config => {
    return {
        ...config,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}

module.exports = {
    webpack: override(
        addWebpackConfig()
    ),
    devServer: overrideDevServer(
        addDevServerConfig()
    )
};