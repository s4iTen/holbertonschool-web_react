module.exports = {
    setupFilesAfterEnv: ['./config/setupTests.js'],
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sss|styl)$': 'jest-css-modules',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
  };