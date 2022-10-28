module.exports = {
  // Clears mock after each test
  clearMocks: true,

  // collectCoverage: true,

  // Collect code coverage from the following files
  // Requires collectCoverage: true, or
  // --coverage when ran
  collectCoverageFrom: ['src/app.js'],

  // Name of coverage directory
  coverageDirectory: 'coverage',

  // File extension to Jest
  moduleFileExtensions: ['js'],

  // Stub out stuff with a single module because jest can't process stuff
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/config/jest/style-mock.js',

    // For CSS modules, instead mock a proxy to enable className lookups
    '\\.(css)$': 'identity-obj-proxy',
  },

  // Defining <rootDir> - where to scan for tests/modules within
  rootDir: '../../',

  // Where to find enzyme setup
  // Paths to code ran before setting up testing environment
  setupFiles: ['<rootDir>/config/jest/setupTests.js'],

  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.js'],

  // Serialise snapshots i.e. make snapshot output prettier
  snapshotSerializers: ['enzyme-to-json/serializer'],

  // Which files to test, default:
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

  // Ignore tests here
  testPathIgnorePatterns: ['<rootDir/(node_modules|dist)/'],

  // Location of test environment, default:
  testURL: 'http://localhost',

  // Files to not transform (perform jest on)
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Report each individual test? Note: single test - always verbose
  verbose: true,
};
