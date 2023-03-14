/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  globals: { 'ts-jest': { diagnostics: false } },
  testEnvironment: 'node',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/test/internals/mocks/cssModule.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/internals/mocks/image.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/test/internal/setupTests.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/test/', '<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
