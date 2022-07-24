let listScreen = require('../screenObjects/iOS/list.screen');

describe('Todo list', () => {
    it('Create a todo list', async () => {
        await listScreen.createListBtn.click();
        await listScreen.listNameInput.addValue('Things to do today');
        await listScreen.createBtn.click();

        //assert
        await expect($('~Things to do today')).toBeExisting();
    });
});