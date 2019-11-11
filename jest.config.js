// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: 'coverage',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/?(*.)test.js?(x)'],
  setupFiles: ['./src/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/assetsTransformer.js',
    '\\.(css|scss)$': '<rootDir>/src/assetsTransformer.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/serviceWorker.js',
    '!<rootDir>/src/setupTests.js',
    '!<rootDir>/src/**/*.stories.js',
    '!<rootDir>/src/assetsTransformer.js',
  ],
};
