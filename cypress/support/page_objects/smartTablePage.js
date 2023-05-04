// for(let i of Object.values(tableData)){ 
//     cy.get('tbody').find('tr').contains('td', i).should('contain', i)
// }

class SmartTable{
    updateAgeByFirstName(searchName, age){
        cy.get('tbody').contains('tr', searchName).then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        })        
    }
    addNewRecordWithFirstAndLastName(id, firstName, lastName, username, email, age){
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="ID"]').type(id)
            cy.wrap(tableRow).find('[placeholder="First Name"]').type(firstName)
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type(lastName)
            cy.wrap(tableRow).find('[placeholder="Username"]').type(username)
            cy.wrap(tableRow).find('[placeholder="E-mail"]').type(email)
            cy.wrap(tableRow).find('[placeholder="Age"]').type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })
    }
}

export const smartTable = new SmartTable()