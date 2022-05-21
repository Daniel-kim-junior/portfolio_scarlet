//jest.config.js
module.exports = {
  preset: "ts-jest", //trypeScript파일은 ts-jest에서 CommonJS구문으로 변환
  testEnvironment: 'node',
  testMatch: ["**/*.spec.[jt]s?(x)", "**/*.test.[jt]s?(x)"], //테스트 파일 위치
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  "transform": {
    "^.+.(ts|tsx)?$": "ts-jest",
    "^.+.(js|jsx)$": "babel-jest"
  },
  setupFiles: ['<rootDir>/__test__/setup-env.js']
};