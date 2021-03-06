module.exports = {
    "rules": {
        "no-console": 0,
        "indent": ["error", 2],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "never"
        ]
    },
    "env": {
        "es6": true,
        "node": true
    },
    "globals": {
        "Opal": true,
        "describe": true,
        "it": true,
        "beforeEach": true,
        "afterEach": true,
        "xit": true,
        "done": true
    },
    "extends": "eslint:recommended"
};
