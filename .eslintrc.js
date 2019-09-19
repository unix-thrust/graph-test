module.exports = {
  env : {
    browser: false,
    es6: true,
    node: true,
  },
  extends : "eslint-config-airbnb-base",
  parser  : "babel-eslint",
  plugins : ["babel"],
  globals : {
    // FIXME: Do we really need `require` for React?
    require : true
  },
  settings : {
    // For webpack
    "import/resolver" : "webpack"
  },
  rules : {
    // Best practices
    "accessor-pairs" : "error",         // Enforces getter/setter pairs in objects
    complexity : ["error", 20],         // Specify the maximum cyclomatic complexity (old value: 11)
    "max-params" : ["error", 10],       // Maximum parameters in function declaration
    curly : ["error", "all"],           // Specify curly brace conventions for all control statements
    eqeqeq : ["error", "allow-null"],   // Require the use of === and !==
    "no-alert" : "error",               // Disallow the use of alert, confirm, and prompt
    "no-eq-null" : "error",             // Disallow comparisons to null without a type-checking operator
    "no-unused-expressions" : "error",  // Disallow usage of expressions in statement position
    "no-constant-condition" : "error",  // Disallow use of constant expressions in conditions
    "no-multi-spaces" : ["error", {     // Disallow use of multiple spaces
      ignoreEOLComments : true
    }],
    "no-param-reassign" : ["error", {   // Disallow reassignment of function parameters
      props : false                     // Allow parameter object manipulation
    }],

    // Style
    // "func-names" : "error",                 // Require function expressions to have a name
    "no-plusplus" : "off",                  // Allow use of unary operators, ++ and --
    "max-nested-callbacks" : ["error", 4],  // Specify the maximum depth callbacks can be nested
    quotes : ["error", "double",            // Use double quotes
      { avoidEscape: true }                 // See http://stackoverflow.com/a/18041188/1480391
    ],
    "max-len" : ["error", 110, 2, {         // Specify the maximum line length (old value: 100)
      ignoreUrls              : true,
      ignoreComments          : false,
      ignoreRegExpLiterals    : true,
      ignoreStrings           : true,
      ignoreTemplateLiterals  : true
    }],
    "prefer-destructuring" : ["error", {
      VariableDeclarator : {
        array   : false,
        object  : true
      },
      AssignmentExpression : {
        array   : false, // Overrides airbnb behaviour
        object  : false  // Overrides airbnb behaviour
      }
    }, {
      enforceForRenamedProperties : false
    }],
    // This option sets a specific tab width for your code
    indent : ["error", 2, {
      SwitchCase : 1,
      VariableDeclarator : 1,
      outerIIFEBody : 1,
      // Enforces indentation level for multi-line property chains.
      // But unfortunately not in variable declarations and assignments, see why:
      // https://github.com/eslint/eslint/commit/46b14cd362286cd1d6597a65297685c5b45b447f
      MemberExpression : 1,
      FunctionDeclaration : { parameters: 1, body: 1 },
      FunctionExpression : { parameters: 1, body: 1 }
    }],
    // Enforces spacing between keys and values in object literal properties
    "key-spacing" : ["error", {
      singleLine : {
        beforeColon : false,
        afterColon  : true
      },
      multiLine : {
        beforeColon : true,
        afterColon  : true,
        mode        : "minimum"
      }
    }],
    // Enforce padding within blocks
    "padded-blocks" : ["error", {
      classes   : "always",
      switches  : "never"
    }],
    // Always jump lines betwwen class members, except for one liners
    "lines-between-class-members" : ["error", "always", {
      exceptAfterSingleLine : true
    }],


    // For react-require
    "import/no-dynamic-require" : "off",// Enable require() calls with expressions
    "global-require" : "off",           // Don't enforce require() on the top-level module scope
    // For react
    "class-methods-use-this" : [        // Enforce that class methods use "this"
      "off", {
        exceptMethods : [],
    }],
    // View link below for react rules documentation
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    "react/no-direct-mutation-state" : "off",

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    "react/prefer-stateless-function" : ["error", {
      ignorePureComponents : true
    }],

    // Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    "react/no-unused-prop-types" : ["error", {
      customValidators : [],

      // TODO: Pass this to false when https://github.com/yannickcr/eslint-plugin-react/issues/819 is solved
      skipShapeProps : true
    }],

    // TODO: We should consider enabling this
    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    "react/require-default-props" : "off",

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    // Exception for "t" used by i18n
    // Remove ignore when https://github.com/yannickcr/eslint-plugin-react/issues/322 is fixed
    "react/prop-types" : ["error", { ignore: ["t"] }],

    // TODO: Reactivate when plugin provide more options for this rule
    // https://github.com/yannickcr/eslint-plugin-react/issues/1775
    // See also https://github.com/yannickcr/eslint-plugin-react/issues/1848
    "react/jsx-one-expression-per-line" : "off",
  },
};
