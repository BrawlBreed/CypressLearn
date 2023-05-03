import { navigateTo } from "../support/page_objects/navigationPage"

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
})