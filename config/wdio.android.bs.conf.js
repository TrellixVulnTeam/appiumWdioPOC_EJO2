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
    'test/specs/android/testCopy.js'
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
    "appium:app": "bs://3aa975ac0b89846819705a8f5bc0aa0b3d837382",
    "appium:autoGrantPermissions": true
}]

config.services = ['browserstack'];

exports.config = config;