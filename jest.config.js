module.exports = {
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    globals: {
        "ts-jest": {
            "babelConfig": true,
            tsConfig: "./tsconfig.json"
        },
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
    ],
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "text-summary"
    ],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css",
        "^(app/.+)$": "<rootDir>/src/$1/",
        "^(components/.+)$": "<rootDir>/src/$1/",
        "^(stores/.+)$": "<rootDir>/src/$1/",
        "^(views/.+)$": "<rootDir>/src/$1/",
        "^(assets/.+)$": "<rootDir>/src/$1/",
        "^(models/.+)$": "<rootDir>/src/$1/"
    },
};