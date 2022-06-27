class DeleteNoteScreen {

    get NoteText() {
        return $('//*[@text="This is a sample tile"]');
    }

    get moreMenu() {
        return $('~More');
    }

    get deleteIcon() {
        return $('//*[@text="Delete"]');
    }

    get mainMenu() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get deletedItems() {
        return $('//*[@text="Trash Can"]');
    }

    get checkDeletedItem() {
        return $('~com.socialnmobile.dictapps.notepad.color.note:id/title');
    }
}
module.exports = new DeleteNoteScreen();