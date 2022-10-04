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
    "appium:app": "bs://b34b6a8bc2a62898449e80016bc43854e93b4a16",
    "appium:autoGrantPermissions": true
}]

config.services = ['browserstack'];

exports.config = config;