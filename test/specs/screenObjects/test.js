const { default: driverCommand } = require("appium/build/lib/cli/driver-command");

describe('Notes test', () => {
    it('Skip tutorial', async () => {
        //Skip 
        await $('//*[@text="SKIP"]').click();

        //check add note is displayed
        await expect($('android.widget.ImageView')).toBeDisplayed();
        await driver.pause(3000);



    });

    it('Add note', async () => {
        //click on add note
        await $(`//*[@text='Add note']`).click();
        await $(`//*[@text='Text']`).click();

        //Check Editing is displayed
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        //type text
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').
            addValue('This is a sample tile');

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').
            addValue('This is a sample text')

        await driver.back();
        await driver.back();

        //check note has been added
        await expect($(`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]`).
            toHaveText("This is a sample text"));
        await expect($('//[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]').
            toBeDisplayed());
        await driver.back();
        await driver.pause(3000);
        await expect($('~com.socialnmobile.dictapps.notepad.color.note:id/title').
            toHaveText('This is a sample tile'));
    });

    it('Delete the note added ', async () => {

        //click on note
        await $('//*[@text="This is a sample tile"]').click();
        await $('~More').click();

        //Click on delete icon
        await $('//*[@text="Delete"]').click();

        //accept alert
        await driver.acceptAlert();

        //Navigate to Delete tab
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();

        //Check not eis present in trash can
        await expect($('~com.socialnmobile.dictapps.notepad.color.note:id/title').
            toHaveText('This is a sample tile'));
    });

});