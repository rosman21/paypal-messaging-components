const { getWebpackConfig } = require('grumbler-scripts/config/webpack.config');

const devServerProxy = require('./utils/devServerProxy');
const globals = require('./globals');
const { localeOptions } = require('./locales');

const FILE_NAME = 'sdk';
const PROTOCOL = 'https';
const HOSTNAME = 'localhost.paypal.com';
const PORT = process.env.PORT || 8080;

module.exports = (env = {}) => {
    const LIBRARY_DEV_CONFIG =
        env.TARGET !== 'sdk'
            ? getWebpackConfig({
                  entry: {
                      messaging: './src/index.js'
                  },
                  filename: '[name].js',
                  libraryTarget: false,
                  debug: true,
                  minify: false,
                  sourcemaps: true,
                  env: env.NODE_ENV,
                  vars: globals(env)
              })
            : getWebpackConfig({
                  entry: './paypal.dev.js',
                  filename: `${FILE_NAME}.js`,
                  debug: true,
                  minify: false,
                  sourcemaps: true,
                  env: env.NODE_ENV,
                  vars: {
                      ...globals(env),
                      __PROTOCOL__: PROTOCOL,
                      __HOST__: `${HOSTNAME}:${PORT}`,
                      __SDK_HOST__: `${HOSTNAME}:${PORT}`,
                      __STAGE_HOST__: 'msmaster.qa.paypal.com',
                      __PORT__: PORT,
                      __PATH__: `/${FILE_NAME}.js`,
                      __NAMESPACE__: 'paypal',
                      __VERSION__: '1.0.55',
                      __COMPONENTS__: ['messages'],
                      __PAYPAL_DOMAIN__: `${PROTOCOL}://${HOSTNAME}:${PORT}`,
                      __PAYPAL_API_DOMAIN__: `${PROTOCOL}://${HOSTNAME}:${PORT}`
                  }
              });

    LIBRARY_DEV_CONFIG.devServer = {
        contentBase: './demo',
        publicPath: '/',
        // set and export DEV_BROWSER in Terminal config to open that specific browser
        // otherwise opens default browser if not set
        open: process.env.DEV_BROWSER || true,
        openPage: (() => {
            switch (env.TARGET) {
                case 'standalone':
                    return 'standalone.html';
                case 'sdk':
                default:
                    return '';
            }
        })(),
        compress: true,
        host: 'localhost.paypal.com',
        port: PORT,
        overlay: true,
        watchContentBase: true,
        injectClient: compiler => !!compiler.devServer,
        before: devServerProxy,
        https: true,
        disableHostCheck: true // IE11
    };

    const COMPONENTS_DEV_CONFIG = getWebpackConfig({
        libraryTarget: 'window',
        modulename: 'crc',
        debug: true,
        minify: false,
        sourcemaps: true,
        filename: '[name].js',
        env: env.NODE_ENV,
        vars: globals({
            ...env,
            TARGET: 'components'
        })
    });

    COMPONENTS_DEV_CONFIG.entry = [...localeOptions, 'US-EZP', 'DE-GPL'].reduce(
        (accumulator, locale) => ({
            ...accumulator,
            [`smart-credit-modal-${locale}`]: `./src/components/modal/content/${locale}/index.js`
        }),
        {}
    );

    const MESSAGING_DEV_COMPONENTS_CONFIG = getWebpackConfig({
        libraryTarget: 'window',
        modulename: 'crc',
        debug: true,
        minify: false,
        analyze: env.analyzeComponents,
        entry: './src/components/message/index.js',
        filename: 'smart-credit-message.js',
        env: env.NODE_ENV,
        vars: globals({
            ...env,
            TARGET: 'messagingComponent'
        })
    });

    const RENDERING_DEV_CONFIG = getWebpackConfig({
        entry: ['./server/index.js'],
        libraryTarget: 'commonjs',
        modulename: 'renderMessage',
        debug: true,
        minify: false,
        sourcemaps: false,
        filename: 'renderMessage.js',
        env: env.NODE_ENV,
        vars: globals(env)
    });

    return [LIBRARY_DEV_CONFIG, COMPONENTS_DEV_CONFIG, MESSAGING_DEV_COMPONENTS_CONFIG, RENDERING_DEV_CONFIG];
};
