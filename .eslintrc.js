module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'react/destructuring-assignment': 'always',
        'react/sort-comp': [0, { }],
        "global-require": 0
    },
    'globals': {
        "fetch": false
    }
};