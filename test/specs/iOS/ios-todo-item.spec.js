let itemScreen = require('../screenObjects/iOS/item.screen');
let listScreen = require('../screenObjects/iOS/list.screen');


describe('Todo list items', () => {
    it('Create item', async () => {
        await listScreen.createListBtn.click();
        await listScreen.listNameInput.addValue('Things to do today');
        await listScreen.createBtn.click();

        //assert
        await expect($('~Things to do today')).toBeExisting();

        await $('~Things to do today').click();
        await itemScreen.createItemBtn.click();
        await itemScreen.titleField.addValue("buy groceries");
        await itemScreen.dateField('Monday, July 18');
        await itemScreen.createBtn.click();

        //assert
        await expect($('//*[@value="buy groceries"]')).toBeDisplayed();
        await expect($('~Due Tomorrow')).toBeDisplayed();

        await driver.pause(3000);

    });
});