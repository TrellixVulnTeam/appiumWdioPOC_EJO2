const { config } = require('./wdio.shared.conf');
const path = require('path');

//
// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ==================
// Specify Test Files
// ==================

config.specs = [
    'test/specs/iOS/ios-todo-item.spec.js'
];

//
// ============
// Capabilities
// ============

config.capabilities = [{
    platformName: "ios",
    "appium:platformVersion": "14.5",
    "appium:deviceName": "iPhone 12 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
}]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

exports.config = config;