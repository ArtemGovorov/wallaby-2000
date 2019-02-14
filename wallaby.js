module.exports = function (wallaby) {
    return {
        files: [
            'tsconfig.json',
            'lib/**/*.js',
            'source/**/!(*.spec).ts'
        ],
        tests: [
            'source/**/*.spec.ts'
        ],
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'jest'
    };
};