module.exports = {
  testEnvironment: 'node',
  rootDir: '..',
  testMatch: ['<rootDir>/02-whitebox-testing/tests/**/*.test.js'],
  collectCoverageFrom: ['<rootDir>/02-whitebox-testing/src/**/*.js'],
  coverageDirectory: '<rootDir>/coverage/whitebox'
};

