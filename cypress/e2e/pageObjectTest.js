import { navigateTo } from "../support/page_objects/navigationPage";
import { formsLayoutsPage } from "../support/page_objects/formLayoutsPage";
import { datepickerPage } from "../support/page_objects/datepickerPage";
import { smartTable } from "../support/page_objects/smartTablePage";

describe('Test with Page Objects', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('Verify Navigation Across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })

    it('Filling up a form', () => {
        navigateTo.formLayoutsPage()

        formsLayoutsPage.submitInlineFormLayoutsPage('Zlatko', 'zantonius20@gmail.com')
        formsLayoutsPage.submitFormWithEmailAndPassword('zantonius20@gmail.com', 'Oldschool96')
    })

    it('Setting a date on a datepicker', () => {
        navigateTo.datepickerPage()

        datepickerPage.selectDayFromCurrent(3)
        datepickerPage.selectDatepickerWithRange(12, 14)
    })

    it('Altering a smart table', () => {
        navigateTo.smartTablePage()

        smartTable.addNewRecordWithFirstAndLastName(1, 'Zlatin', 'Antonius', 'zantonius20', 'zantonius20@gmail.com', 16)
        smartTable.updateAgeByFirstName('Zlatin', 16)
    })
})