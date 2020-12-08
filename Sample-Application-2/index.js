const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');
const { exec } = require("child_process");
// const App = require('./app');
// const app = new App(config);
// app.launch()
//   .then(() => {
//     logger.info('Server launched');
//   })
//   .catch((error) => {
//     logger.error('found error, shutting down server');
//     app.close()
//       .catch(closeError => logger.error(closeError))
//       .finally(() => logger.error(error));
//   });
const launchServer = async () => {
  try {
    this.expressServer = new ExpressServer(config.URL_PORT, config.URL_IP, config.OPENAPI_YAML);
    await this.expressServer.launch();
    const runcommand = 'curl --header "Content-Type: application/json" --request POST --data \'{"username":"","password":"","hosts":[{"host":"a079e195a0638452a970fcf120de033c-1333340820.us-west-2.elb.amazonaws.com","port": 27017}]}\' http://localhost:3000/api/login --silent > token && export token=`sed -e \'s/^.*"token":"([^"]*)".*$/1/\' token` && if [[ $token[1] == "{" ]]; then echo \'Failure in Logging in\'; else echo \'Login Success\'; fi';
    exec(runcommand, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
const runcommandjsonpp = '[ ! -f jsonpp-1.3.0-linux-x86_64.zip ] && [ wget https://github.com/jmhodges/jsonpp/releases/download/1.3.0/jsonpp-1.3.0-linux-x86_64.zip > output ]';
    exec(runcommandjsonpp, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);

    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);

    }
    console.log(`stdout: ${stdout}`);
});
const runcommandextract = 'unzip jsonpp-1.3.0-linux-x86_64.zip > output';
    exec(runcommandextract, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
    logger.info('Express server running');
  } catch (error) {
    logger.error(error);
    await this.close();
  }
};
launchServer().catch(e => logger.error(e));
