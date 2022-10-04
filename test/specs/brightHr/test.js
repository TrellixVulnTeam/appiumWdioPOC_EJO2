const { default: driverCommand } = require("appium/build/lib/cli/driver-command");

describe('Some test', () => {
    it('Login to BrightHr', async () => {
        //Select Env 
        await $("//*[@resource-id='brighthr.com.brighthr.debug:id/debug_settings_confirm_button']").click();
        await $("//*[@text='Login']").click();
        await driver.pause('15000');

        let googleAccept = await $("//*[@text='Accept & continue']");
        let userNameField = await $("//*[@resource-id='Username']");


        if (await googleAccept.isDisplayed()) {
            await driver.pause('5000');
            await googleAccept.click();
            await $("//*[@text='No thanks']").click();
            await userNameField.setValue('brightsafeuk6@grr.la');
            await $("//*[@resource-id='Password']").setValue('A123456789');
            await $("//*[@text='Login']").click();
            await $("//*[@content-desc='Close']").click();
        } else if (await userNameField.isDisplayed()) {
            await driver.pause('5000');
            await userNameField.setValue('brightsafeuk6@grr.la');
            await $("//*[@resource-id='Password']").setValue('A123456789');
            await $("//*[@text='Login']").click();

            await expect($(`//*[@text="What's new"]`)).toExist();
            await $("//*[@content-desc='Close']").click();
        } else {
            await driver.pause('5000');
            await expect($(`//*[@text="What's new"]`)).toExist();
            await $("//*[@content-desc='Close']").click()
        }

        await $("//*[@text='Hi, Barry']").isDisplayed();
    });

    it('Selects profile and scrolls down', async () => {
        await $("~Your profile").click();
        await $("//*[@text='BrightSafe Excavators 3']").isDisplayed();
        await $("//*[@text='Sicknesses']").isDisplayed();
        await $("//*[@text='Other']").isDisplayed();
        await $("//*[@text='BrightSafe Excavators 3']").isDisplayed();
        await $("//*[@text='BrightSafe Excavators 3']").isDisplayed();
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Payable")');
        // await $("//*[@text='Time off in lieu']").isDisplayed();
        await $('//*[@text="Personal"]').click();
        await driver.pause('5000');
    });




})