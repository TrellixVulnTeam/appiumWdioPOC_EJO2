
describe('iOS Native Feature', () => {


    it('Working with alert box', async () => {
        await $('~Alert Views').click();
        await $('~Okay / Cancel').click();


        //click ok
        // await $('~OK').click();

        console.log(await driver.getAlertText());

        //accept or dismiss alert
        await driver.dismissAlert();

        //assertion
        await expect($('~OK')).not.toExist();
    });

    it('Working with scrollable elements', async () => {

        //easiest
        // await driver.execute('mobile:scroll', { direction: "down" });
        // await driver.execute('mobile:scroll', { direction: "up" });

        //complex

        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        await driver.execute('mobile:scroll', { element: redPicker.elementId, direction: "down" });
        await driver.execute('mobile:scroll', { element: bluePicker.elementId, direction: "up" });
        await driver.execute('mobile:scroll', { element: greenPicker.elementId, direction: "down" });

        await driver.pause('3000');
    });

    it.only('Working with Picker View', async () => {
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');

        // set purple colour (125, 0, 125)
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause('3000');
    });
});