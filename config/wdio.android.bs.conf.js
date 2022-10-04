require('dotenv').config()
const { config } = require('./wdio.shared.conf');


//
// ==================
// BrowserStack Credentials
// ==================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;


//
// ==================
// Specify Test Files
// ==================

config.specs = [
    'test/specs/brightHr/test.js'
];

//
// ============
// Capabilities
// ============

config.capabilities = [{
    platformName: "Android",
    "appium:platformVersion": "10.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://c80a6ad44a5c1c96a5fa4e9f2804f2f3ad3eef3e",
    "appium:autoGrantPermissions": true
}]

config.services = ['browserstack'];

exports.config = config;