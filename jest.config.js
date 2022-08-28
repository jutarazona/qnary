module.exports = {
    verbose: true,
    moduleFileExtensions: [
        "js",
        "json",
        "js",
        "node"
    ],
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html",
            "openReport": false,
            "append": true,
            "pageTitle": "Qnary Report",
            "includeFailureMsg": true,
            "dateFormat": "yyyy-mm-dd HH:MM"
        }]
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