module.exports = {
  collectCoverageFrom: [
    "src/app/**/*.{js,jsx}"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  setupFiles: [
    "<rootDir>/src/test/enzyme-setup.js"
  ],
  modulePaths: [
    "<rootDir>/src"
  ],
  moduleFileExtensions: [
    "web.js",
    "js",
    "json",
    "web.jsx",
    "jsx"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/test/fileMock.js",
    "\\.(css|pcss)$": "identity-obj-proxy"
  }
}