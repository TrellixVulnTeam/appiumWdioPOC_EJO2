describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {

        //find element by accessibility id
        const appOption = await $('~App')

        //click on element
        await appOption.click();

        //assertion
        const actionBar = await $(`~Action Bar`)
        await expect(actionBar).toBeExisting();

    });

    it('Find element by class name', async () => {
        //find element by class name
        const className = await $(`android.widget.TextView`);
        console.log(await className.getText());

        //Assertion
        await expect(className).toHaveText('API Demos');
    });

    xit('Find elements by Xpath ', async () => {

        // Xpath (//tagname[@attribute='value'])

        await $(`//android.widget.TextView[@content-desc="Alert Dialogs"]`).click();

        // find by resourceId
        await $(`//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']`).click();

        // find by text
        await $(`//android.widget.TextView[@text='Command two']`).click();


        //find by class
        const textAssertion = await $(`//android.widget.TextView`);
        await expect(textAssertion).toHaveText(`You selected: 1 , Command two`);
    });

    it('Find element by UISelector', async () => {
        await $(`android=new UiSelector().textContains("Loader")`).click();
    });


    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation',
            'App', 'Content',
            'Graphics', 'Media',
            'NFC', 'OS',
            'Preference', 'Text',
            'Views'
        ]
        const actualList = []
        //find multiple elements
        const textList = await $$(`android.widget.TextView`)

        //loop thorough them
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        // assert the list
        await expect(actualList).toEqual(expectedList);
    });

    it.only('Navigates to the app', async () => {
        //click on views
        const viewButton = await $('~Views');
        await viewButton.click();

        //click on Auto Complete
        const autoComplete = await $('~Auto Complete')
        await autoComplete.click();

        //click on screen top
        const screenTop = await $('~1. Screen Top');
        await screenTop.click();

        //fill in country
        const countryField = await $("//android.widget.EditText");
        await countryField.addValue("Canada");
        await expect(countryField).toHaveText("Canada");
    });
});