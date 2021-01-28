const config = {
  // Clears mock after each test
  clearMocks: true,

  // collectCoverage: true,

  // Collect code coverage from the following files
  // Requires collectCoverage: true, or
  // --coverage when ran
  collectCoverageFrom: ["src/app.js"],

  // Name of coverage directory
  coverageDirectory: "coverage",

  // File extension to Jest
  moduleFileExtensions: ["js"],

  // Where to find enzyme setup
  // Paths to code ran before setting up testing environment
  setupFiles: ["<rootDir>/enzyme.config.js"],

  // Defining <rootDir>
  rootDir: 1,
};

export default config;
