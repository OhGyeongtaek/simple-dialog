module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: ["ts", "vue", "js", "json"],
  transform: {
    "^.+\\.(ts)?$": "ts-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
