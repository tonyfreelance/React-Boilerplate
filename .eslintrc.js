module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules":{
        "no-console":0,
        "indent": 0,
        "react/jsx-indent": [2, "tab"],
        "react/jsx-indent-props": [2, "tab"],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "object-curly-spacing": ["error", "never"],
        "max-len": [1, 120, 2, {ignoreComments: true}],
        "quote-props": [1, "consistent-as-needed"],

    },
};
