function selectDateFromCurrent(days){
    let date = new Date()
    date.setDate(date.getDate() + days)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('default', {month: 'short'})
    let dateAssert = futureMonth+' '+futureDay+' '+date.getFullYear()
    cy.get('nb-calendar-view-mode').invoke('attr', 'ng-reflect-date').then( date => {
        if(!date.includes(futureMonth)){
            cy.get('[data-name="chevron-right"]').click()
        }else{ 
            cy.get('nb-calendar-day-picker').contains(futureDay).click()

        }
    })
    return dateAssert
}

class DatepickerPage{
    selectDayFromCurrent(days){
        cy.get('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            let dateAssert = selectDateFromCurrent(days)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
            cy.wrap(input).should('have.value', dateAssert)
        })
    }
}

export const datepickerPage = new DatepickerPage()