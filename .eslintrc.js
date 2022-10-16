module.exports = {
    env: {
        node: true,
    },
    plugins: [
        'prettier'
    ],
    rules: {
        'prettier/prettier': 'error',
        semi: ['warn', 'never'],
        indent: ['warn', 4],
    },
}
