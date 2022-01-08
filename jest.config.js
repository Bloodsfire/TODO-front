// It overrides default config from @angular-builders/jest

module.exports = {
  testPathIgnorePatterns: ['/cypress/', '/dist/', '/cache/'],
  moduleNameMapper: {
    '@app/common/(.*)$': '<rootDir>/src/app/common/$1',
    '@app/libs/(.*)$': '<rootDir>/src/libs/$1',
    '@app/core/(.*)$': '<rootDir>/src/core/$1',
    '@app/data/(.*)$': '<rootDir>/src/data/$1',
    '@app/infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
  },
};
