module.exports = {
    extends: 'grumbler-scripts/config/.babelrc-browser',
    env: {
        test: {
            presets: [['@babel/env', { targets: { node: 'current' } }]]
        }
    },
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
};
