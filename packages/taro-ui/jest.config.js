module.exports = {
  verbose: true,
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/test/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(@tarojs)/)'],
  moduleNameMapper: {
    '^(\\.\\./)+lib/(.*)$': '<rootDir>/dist/$2',
    '^(\\.\\./)+dist/(.*)$': '<rootDir>/dist/$2',
    '@tarojs/taro': '<rootDir>/test/__mock__/taro.js',
    '@tarojs/components': '<rootDir>/test/__mock__/taroComponents.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mock__/styleMock.js',
    '\\.json$': '<rootDir>/test/__mock__/jsonMock.js'
  },
  collectCoverageFrom: ['dist/components/**/*.{js,jsx}', '!dist/**/*.d.ts']
}
