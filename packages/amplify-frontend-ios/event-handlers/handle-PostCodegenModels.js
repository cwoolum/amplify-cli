const amplifyApp = require('amplify-app');

async function run(context) {
  const frontend = context.amplify.getProjectConfig().frontend;
  if (frontend === 'ios') {
    await amplifyApp.run({ skipEnvCheck: true, platform: frontend });
  }
}

module.exports = {
  run,
};