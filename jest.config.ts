import type {Config} from 'jest';

const config: Config = {
    testEnvironment: "jsdom",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    transform: {
        "^.+\\.tsx?$": ['ts-jest', {
            "babelConfig": true,
            diagnostics: true,
            tsconfig: "./tsconfig.json"
        }],
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    coveragePathIgnorePatterns: [
        "/node_modules/",
    ],
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "text-summary"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.js"
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
    unmockedModulePathPatterns: [
        "node_modules/react/"
    ]
};

export default config;
