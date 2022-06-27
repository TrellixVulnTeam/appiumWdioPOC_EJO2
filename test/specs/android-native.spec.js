
describe('Android native features tests', () => {
    it('Access an activity directly', async () => {
        //access activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        //pause
        await driver.pause(3000);

        //assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with dialog boxes', async () => {
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");
        //click on the dialog box
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        // //accept alert
        // await driver.acceptAlert();

        //dismiss alert
        //await driver.dismissAlert();

        //get Alert text
        console.log('ALERT TEXT -------->', await driver.getAlertText());
        //click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assert alert box is no longer visible 
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical Scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        //scroll to the end (not stable if element get moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        // await $('~Secure Surfaces').click();

        //assert
        await expect($('~Secure Surface View')).toExist();
    });

    it('Horizontal scrolling', async () => {
        //access screen
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1");

        //horizontal scroll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

        await driver.pause(3000);
    });

    it.only('Scrolling Exercise', async () => {
        await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");

        //get date text
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        console.log('============>' + await date.getText());
        const currentDate = await date.getText();

        //click on date picker
        await $('//*[@resource-id="io.appium.android.apis:id/pickDate"]').click();

        //Horizontal scroll to next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await driver.pause(3000);

        //pick 10th of that month 
        await $('//*[@text="10"]').click();
        // await $('//*[@text="OK"]').click();
        await driver.acceptAlert();

        //assert new date
        await expect(date).toHaveTextContaining("10");
        await expect(await date.getText()).not.toEqual(currentDate);
    });
});

