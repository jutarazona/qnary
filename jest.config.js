module.exports = {
    verbose: true,
    moduleFileExtensions: [
        "js",
        "json",
        "js",
        "node"
    ],
    testMatch: [
        "**.test.js"
    ],
    // This configuration indicates the Jest to an array of regexp pattern strings that are matched towards all test paths, matched tests are skipped
    testPathIgnorePatterns: [
        "/node_modules/"
    ],
    roots: [
        "<rootDir>/test/"
      ]
};