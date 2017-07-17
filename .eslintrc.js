module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true
  },
  "plugins": [
    "react",
    "react-native",
    "import"
  ],
  "ecmaFeatures": {
    "jsx": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  "rules": {
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    "import/named": 0,
    "import/namespace": 2,
    "import/default": 2,
    "react/display-name": 0,
    "react/prop-types": 0,
    "import/export": 2
  }
}
