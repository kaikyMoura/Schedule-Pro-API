export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testTimeout: 3000,
  maxWorkers: 1,
  forceExit: true,
  detectOpenHandles: true,
  clearMocks: true,
  restoreMocks: true,
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  modulePathIgnorePatterns: ['/node_modules/', '/dist/'],
  // Optimizations
  bail: 1,
  verbose: true,
  silent: false,
  collectCoverage: false,
  coverageReporters: [],
  maxConcurrency: 1,
  workerIdleMemoryLimit: '512MB',
  moduleDirectories: ['node_modules', 'src'],
};
