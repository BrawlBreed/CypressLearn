import { navigateTo } from "../support/page_objects/navigationPage";
import { formsLayoutsPage } from "../support/page_objects/formLayoutsPage";
import { datepickerPage } from "../support/page_objects/datepickerPage";

describe('Test with Page Objects', () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('Veridy Navigation Across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toasterPage()
        navigateTo.toasterPage()
    })

    it('filling up a form', () => {
        navigateTo.formLayoutsPage()
        formsLayoutsPage.submitInlineFormLayoutsPage('Zlatko', 'zantonius20@gmail.com')
        formsLayoutsPage.submitFormWithEmailAndPassword('zantonius20@gmail.com', 'Oldschool96')
    })

    it.only('setting a date on a datepicker', () => {
        navigateTo.datepickerPage()
        datepickerPage.selectDayFromCurrent(3)
    })
})