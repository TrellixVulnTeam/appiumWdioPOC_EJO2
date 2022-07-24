const { default: driverCommand } = require("appium/build/lib/cli/driver-command");

describe('iOS find elements', () => {
    it('find elements by accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find by tag name', async () => {
        //single element text
        console.log(await $('XCUIElementTypeStaticText').getText());

        //multiple element text
        let eleText = await $$('XCUIElementTypeStaticText');
        for (const iterator of eleText) {
            console.log(await iterator.getText());
        };
    });

    it('find elements by XPATH', async () => {
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    });

    it('find elements by CLASS CHAIN', async () => {

        let alertText = '**/XCUIElementTypeStaticText[`label == "AlertControllerViewController"`]'

        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it('find elements by PREDICATE STRING', async () => {

        //let alertText = 'label == "AlertControllerViewController"'

        let alertText = 'value BEGINSWITH[c] "alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it.only('Exercise on search field', async () => {
        await $('~Search').click();
        await $('~Default').click();
        await $(`-ios predicate string:type == "XCUIElementTypeSearchField"`).addValue('Hello there');
        await expect($(`-ios predicate string:type == "XCUIElementTypeSearchField"`)).toHaveText('Hello there');
        await $('//*[@label="Clear text"]').click();
        await expect($(`-ios predicate string:type == "XCUIElementTypeSearchField"`)).not.toHaveText('Hello there');
        await driver.pause('3000');


    })

});