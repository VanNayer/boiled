module.exports = {
    extends: [
        'doctolib',
        'doctolib/react',
        'doctolib/test',
    ],
    rules: {
        // The wishlist that we should be able to enforce easily after some time.
        // We can add them to the repo once they are enforced.
        'babel/func-params-comma-dangle': ['warn', 'always-multiline'],
        'max-len': ['warn', 120, 4],
        'react/no-find-dom-node': 'warn',
        'jsx-quotes': ['error', 'prefer-double'],

        // To be moved inside our eslint doctolib plugin.
        'no-return-assign': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-identical-title': 'error',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-top-level-hooks': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-wrap-multilines': 'error',
        'react/no-danger-with-children': 'error',
        'react/prop-types': 'off',
        'react/style-prop-object': 'error',
        'react/no-children-prop': 'error',
        'react/no-unescaped-entities': 'error',
        'react/jsx-no-bind': ['error', {
            ignoreRefs: true,
            allowArrowFunctions: false, // Override airbnb
            allowBind: false,
        }],
        'react/no-multi-comp': ['error', {
            ignoreStateless: true,
        }],

        // To be moved inside our eslint doctolib plugin.
        'react/no-unused-prop-types': 'off',
        'mocha/no-hooks-for-single-case': 'off',
        'mocha/no-hooks': 'off',
        'mocha/no-mocha-arrows': 'off',
        'react/forbid-component-props': 'off',
    },
};
