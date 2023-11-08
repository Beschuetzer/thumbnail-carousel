module.exports = {
  testEnvironment: "jsdom",
  //this uses identity-obj-proxy to handle css/less/scss files
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  //ignore files in dist
  modulePathIgnorePatterns: ["dist/*"],
};
