const fs = require('fs');
const path = require('path');

let NYM_SERVER_ADDRESS = '6aT6T26rPrwkjFjufRK31cUcGaFL4wuEwfEtSh96dBFD.4ptNCVF1xcS4A7FWgB26MZtW1EmbD6EteQbbrKSNPdv8@EtnWHt7LXPzSZKunUacJV1vfbooPSHCdGufcsw9veW59';
let NYM_CLIENT_URL = 'ws://127.0.0.1:1234';
console.log({
  NYM_SERVER_ADDRESS,
  NYM_CLIENT_URL,
});
// Cannot use app.getPath() due to context isolation
const appDataDir = process.env.APPDATA || (process.platform === 'darwin' ? `${process.env.HOME}/Library/Application Support/` : `${process.env.HOME}/.config/`);
const APP_DATA_PATH = path.join(appDataDir, 'sync-it');

console.log('App Data Path: ', APP_DATA_PATH);

const configFilePath = path.join(APP_DATA_PATH, 'config.json');

if (!fs.existsSync(configFilePath)) {
  fs.writeFileSync(configFilePath, JSON.stringify({
    NYM_SERVER_ADDRESS,
    NYM_CLIENT_URL,
  }, null, 2));
} else {
  const buffer = fs.readFileSync(configFilePath);
  ({ NYM_SERVER_ADDRESS, NYM_CLIENT_URL } = JSON.parse(buffer.toString()));
}

console.log({
  NYM_SERVER_ADDRESS,
  NYM_CLIENT_URL,
});

module.exports = {
  NYM_SERVER_ADDRESS,
  NYM_CLIENT_URL,
  APP_DATA_PATH,
};
