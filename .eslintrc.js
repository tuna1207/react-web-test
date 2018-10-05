const config = {
  "extends": ["standard","standard-react","plugin:react-native/all"],
  "plugins": ["react","react-native"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
       "experimentalObjectRestSpread": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    // overrides
        // off
        "camelcase": "off",
        // warn
        "react/boolean-prop-naming": "warn",
        "react/forbid-prop-types": "warn",
        "react/no-children-prop": "warn",
        "react/no-deprecated": "warn",
        "react-native/no-inline-styles": "warn",
        "react-native/no-color-literals": "warn",
        // error
        "curly": "error",
        "no-var": "error",
        "no-case-declarations": "error",
        "no-console": ["error", {
            "allow": ["warn", "error"]
        }],
        "no-empty": "error",
        "sort-imports": ["error", {
            "ignoreCase": true,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["multiple", "single", "all", "none"]
        }],
        // "graphql/capitalized-type-name": ['warn', {
        //     "schemaJson": require("./graphql/schema.json")
        // }],
        // "graphql/named-operations": ['error', {
        //     "schemaJson": require("./graphql/schema.json")
        // }],
        // "graphql/required-fields": ['error', {
        //     "requiredFields": ["id"],
        //     "env": "apollo",
        //     "schemaJson": require("./graphql/schema.json")
        // }],
        // "graphql/template-strings": ["error", {
        //     "validators": "all",
        //     "env": "apollo",
        //     "schemaJson": require("./graphql/schema.json")
        // }],
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
        "react/jsx-handler-names": ["error", {
            "eventHandlerPrefix": "_?on"
        }],
        "react/jsx-max-props-per-line": ["error", {
            "maximum": 1,
            "when": "multiline"
        }],
        "react/jsx-no-bind": ["error", {
            "allowArrowFunctions": false,
            "allowBind": false,
            "ignoreRefs": true
        }],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-literals": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": ["error", {
            "callbacksLast": true,
            "shorthandFirst": true,
            "ignoreCase": true
        }],
        "react/jsx-tag-spacing": ["error", {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never"
        }],
        "react/jsx-wrap-multilines": "error",
        "react/no-multi-comp": ["error", {
            "ignoreStateless": true
        }],
        "react/no-redundant-should-component-update": "error",
        "react/no-set-state": "error",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unused-prop-types": "error",
        "react/no-will-update-set-state": "error",
        "react/prefer-stateless-function": ["error", {
            "ignorePureComponents": true
        }],
        "react/prop-types": ["error", {
            "skipUndeclared": true
        }],
        "react/prefer-es6-class": ["error", "always"],
        "react/require-render-return": "error",
        "react/sort-comp": ["error", {
            "order": [
                "static-methods",
                "lifecycle",
                "everything-else",
                "event-handling",
                "rendering"
            ],
            "groups": {
                "lifecycle": [
                    "displayName",
                    "propTypes",
                    "contextTypes",
                    "childContextTypes",
                    "mixins",
                    "statics",
                    "defaultProps",
                    "constructor",
                    "getDefaultProps",
                    "getInitialState",
                    "state",
                    "getChildContext",
                    "componentWillMount",
                    "componentDidMount",
                    "componentWillReceiveProps",
                    "shouldComponentUpdate",
                    "componentWillUpdate",
                    "componentDidUpdate",
                    "componentWillUnmount"
                ],
                "event-handling": [
                    "/^_?on.+$/"
                ],
                "rendering": [
                    "/^_?render.+$/",
                    "render"
                ]
            }
        }],
        "react/sort-prop-types": ["error", {
            "callbacksLast": true,
            "ignoreCase": true,
            "requiredFirst": true
        }]
  },
  "globals": {
    "describe": true,
      "it": true,
      "expect": true,
      "fetch": true,
      "navigator": true,
      "__DEV__": true,
      "XMLHttpRequest": true,
      "FileReader": true,
      "FormData": true,
      "React$Element": true
  }
}
module.exports = config; 
