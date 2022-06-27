class AddNoteScreen {

    get skipBtn() {
        return $('//*[@text="SKIP"]');
    }

    get addNoteText() {
        return $('android.widget.ImageView');
    }

    get addNoteBtn() {
        return $(`//*[@text="Add note"]`);
    }

    get textBtn() {
        return $(`//*[@text='Text']`);
    }

    get editingText() {
        return ($('//*[@text="Editing"]'));
    }

    get displayTextField() {
        return $(`//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]`);
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get titleField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }

    async saveNote() {
        await driver.back();
        await driver.back();
    }

    get MainTitleField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }
}


module.exports = new AddNoteScreen();