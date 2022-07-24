class ItemScreen {

    get createItemBtn() {
        return $('//*[@value="Create item"]')
    }

    get titleField() {
        return $('//*[@value="Title"]')
    }

    async dateField(date) {
        await $('//*[@value="Due"]').click();
        await $('~Date Picker').click();
        await $(`~${date}`).click();
        await $('//XCUIElementTypeWindow[@index=2]').click();
    }

    get createBtn() {
        return $('~Create');
    }

}
module.exports = new ItemScreen();