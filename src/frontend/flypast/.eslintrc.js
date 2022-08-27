module.exports = {
    root: true,
    ignorePatterns: ["projects/**/*"],
    overrides: [{
        files: ["*.ts"],
        parserOptions: {
            project: ["tsconfig.json"],
            createDefaultProgram: true
        },
        plugins: [
            "import",
            "simple-import-sort"
        ],
        extends: [
            "plugin:@angular-eslint/recommended",
            "plugin:@angular-eslint/template/process-inline-templates",
            "plugin:prettier/recommended"
        ],
        rules: {
            "@angular-eslint/directive-selector": [
                "error", {
                    type: "attribute",
                    prefix: "app",
                    style: "camelCase"
                }
            ],
            "@angular-eslint/component-selector": ["error", {
                type: "element",
                prefix: "app",
                style: "kebab-case"
            }],
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "import/no-duplicates": "error",
            "@typescript-eslint/explicit-function-return-type": "error",
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: [
                        'static-field',
                        'instance-field',
                        'public-static-method',
                        'public-instance-method',
                        'private-static-method',
                        'private-instance-method',
                    ],
                },
            ],
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'class',
                    format: ['PascalCase'],
                },
            ],
            'no-console': ['error', {}],
            'no-eval': 'error',
        }
    }, {
        files: ["*.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {}
    }, {
        files: ["*.html"],
        excludedFiles: ["*inline-template-*.component.html"],
        extends: ["plugin:prettier/recommended"],
        rules: {
            "prettier/prettier": ["error", {
                parser: "angular"
            }]
        }
    }]
}
