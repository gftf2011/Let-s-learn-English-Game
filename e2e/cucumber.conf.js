
exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://localhost:4200/',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [
    './features/app.feature'
  ],
  cucumberOpts: {
    require: [
      './steps/steps.ts',
      './steps/cucumber-timeout.ts'
    ]
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './cucumber-tsconfig.json')
    });
  }
};