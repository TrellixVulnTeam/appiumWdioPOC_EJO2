const AddNoteScreen = require("../screenObjects/android/add-note.screen");
const DeleteNoteScreen = require("../screenObjects/android/delete-note.screen")

describe('Notes test', () => {

    let sampleTitle = 'This is a sample tile';
    let sampleText = 'This is a sample text';

    it('Skip tutorial', async () => {
        //Skip 
        await AddNoteScreen.skipBtn.click();

        //check add note is displayed
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    });

    it('Add note', async () => {
        //click on add note
        await AddNoteScreen.addNoteBtn.click();
        await AddNoteScreen.textBtn.click();

        //Check Editing is displayed
        await expect(AddNoteScreen.editingText).toBeDisplayed();

        //type text
        await AddNoteScreen.titleField.addValue(sampleTitle);
        await AddNoteScreen.noteField.addValue(sampleText);

        await AddNoteScreen.saveNote();

        //check note has been added
        await expect(AddNoteScreen.displayTextField).toHaveText(sampleText);
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await driver.back();
        await expect(AddNoteScreen.MainTitleField).toHaveText(sampleTitle);
    });

    it('Delete the note added ', async () => {

        //click on note
        await DeleteNoteScreen.NoteText.click();
        await DeleteNoteScreen.moreMenu.click();

        //Click on delete icon
        await DeleteNoteScreen.deleteIcon.click();

        //accept alert
        await driver.acceptAlert();

        //Navigate to Delete tab
        await DeleteNoteScreen.mainMenu.click();
        await DeleteNoteScreen.deletedItems.click();

        //Check note is present in trash can
        await expect(DeleteNoteScreen.checkDeletedItem.toHaveText(sampleTitle));
    });

});