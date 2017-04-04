module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "always"],
        "arrow-spacing": ["error", { "before": false, "after": false }],
        "prop=types": [0],
        "react/require-default-props": [0],
        "react/prop-types": [0]
    },
    "env": {
        "browser": true
    }
};
