class ListScreen {

    get createListBtn() {
        return $('//*[@name = "Create list"]')
    }

    get listNameInput() {
        return $('//*[@value= "List Name"]')
    }

    get createBtn() {
        return $('~Create')
    }

}
module.exports = new ListScreen();