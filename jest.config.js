/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    '^.+.ts?$': ["ts-jest",{}],
    "^.+.tsx?$": ["ts-jest",{}],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)",
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
