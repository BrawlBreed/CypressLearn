// <reference types="cypress" />

describe('Our First Test', () => {
    // it('first test', () => {

    //     cy.visit('/')
    //     cy.contains('Forms').click()
    //     cy.contains('Form Layouts').click()
        
    //     // by tag Name
    //     cy.get('input')

    //     // by the ID
    //     cy.get('#inputEmail')

    //     // by class name
    //     cy.get('.input-full-width')

    //     // by Attribute name
    //     cy.get('[placeholder]')

    //     // by attribute name and value
    //     cy.get('[placeholder="Email"]')

    //     // by Class value
    //     cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //     //by Tag name and Attribute name value
    //     cy.get('input[placeholder="Email"]')

    //     //by two different attributes
    //     cy.get('[placeholder="Email"][type="email"]')

    //     //by tag name, Attribute with value, id, class name
    //     cy.get('input[placeholder="Email"]#inputEmail')
        
    //     // the next recommended way by Cypress
    // })
    // it('second test', () => {
    //     cy.visit('/')
    //     cy.contains('Forms').click()
    //     cy.contains('Form Layouts').click()

    //     cy.get('button[type="submit"]').contains('Sign in')

    //     cy.contains('[status="warning"]', 'Sign in')

    //     cy.get('#inputEmail3')
    //     .parents('form')
    //     .find('button')
    //     .should('contain', 'Sign in')
    //     .parents('form')
    //     .find('nb-checkbox')
    //     .click()

    //     cy.contains('Option 1')   
    //     .find('input')
        
    //     cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
    // })

    // it('third test', () => {
    //     cy.visit('/')
    //     cy.contains('Forms').click()
    //     cy.contains('Form Layouts').click()
        
        // cy.contains('nb-card', 'Using the Grid')
        // .find('[type="email"]').parents('form')

        // const firstForm = cy.contains('nb-card', 'Basic Form').find('[id="inputPassword2"]').should('contain', 'Password')
        
        // cy.contains('nb-card', 'Using the Grid').then( firstForm => {
        //     const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
        //     const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
        //     // expect(emailLabelFirst).to.equal('Email')
        //     // expect(passwordLabelFirst).toBe('Password')
        
        //     cy.contains('nb-card', 'Basic form').then(secondForm => {
        //         const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text();
        //         expect(emailLabelSecond).to.equal('Email address');

        //         // From JQuery to Cypress format
        //         cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
        //     });
        // })
    // })

        // it('invoke command', () => {
        //     cy.visit('/')
        //     cy.contains('Forms').click()
        //     cy.contains('Form Layouts').click()

        //     // //1
        //     // cy.get('[for="inputEmail1"]').should('contain', 'Email adress')
        
        //     // //2
        //     // cy.get('[for="inputEmail1"]').then(label => {
        //     // expect(label.text()).to.equal('Email adress')
        //     // })

        //     // //3
        //     // cy.get('[for="inputEmail1"]').invoke('text').then( text => {
        //     //     expect(text).to.equal('Email adress')
        //     // })

        //     cy.contains('nb-card', 'Inline form')
        //     .find('input[type="checkbox"]')
        //     .siblings('[class="custom-checkbox"]')
        //     .click()

        //     // cy.contains('button', 'Send').then(button => {
        //     //     expect(button.text()).to.equal('Send')
        //     // })

        //     cy.contains('nb-card', 'Inline form')
        //     .find('span[type="checkbox"]')
        //     .should('be.selected', )
        //     .invoke('attr', 'class')
        //     .then(classValue => {
        //         expect(classValue).to.contain('checked')
        //     })
        // })

        // An Alternative to the task that's been given with the calendar:)
        // it.only('assert property', () => {
        //     cy.visit('/')
        //     cy.contains('Forms').click()
        //     cy.contains('Datepicker').click()

        //     cy.contains('nb-card', 'Datepicker with Range')
        //     .find('input')
        //     .click()
        //     .get('nb-calendar-view-mode')
        //     .children('button')
        //     .click()
        //     .get('nb-calendar-year-cell')
        //     .contains('div', '2019')
        //     .click()
        // })
        
        // it.only('assert property2', () => {
        //     cy.visit('/')
        //     cy.contains('Forms').click()
        //     cy.contains('Datepicker').click()

        //     function selectDayFromCurrent(day){
        //         let date = new Date()
        //         date.setDate(date.getDate() + day)
        //         let futureDate = date.getDay()
        //         let futureMonth = date.toLocaleString('default', {month: 'short'})
            
        //         const expectedDate = cy.get('nb-calendar-view-mode').invoke('attr', 'ng-reflect-date').then( date => {
        //             if(!date.includes(futureMonth)){
        //                 cy.get('[data-name="chevron-right"]').click()
        //             }else{ 
        //                 cy.get('nb-calendar-day-picker').contains(futureDate).click()

        //             }

        //             cy.log(cy.wrap(date))
        //             // return cy.get('nb-calendar-view-mode').invoke('attr', 'ng-reflect-date')
        //         })

        //         return expectedDate
        //     }

        //     cy.contains('nb-card', 'Common Datepicker')
        //     .find('input').then(input => {
        //         cy.wrap(input.click())

        //         // selectDayFromCurrent(300).then(value => {
        //         //     console.log(value.text())
        //         // }) 

        //         cy.wrap(input).invoke('prop', 'value')
        //         //.should('contain', date)
        //         // cy.get('nb-card-body').contains('div', '2019').click()
        //         // cy.contains('May').click()
        //         // cy.contains('17').click()

        //         // cy.wrap(input).invoke('prop', 'value').should('contain','May 17, 2019')
        //     })
        // })
        
        // it.only('assert property 3', () => {
        //     cy.visit('/')
        //     cy.contains('Forms').click()
        //     cy.contains('Form Layouts').click()

        //     cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
        //         cy.wrap(radioButtons)
        //             .first()
        //             .check({ force: true}) // Using the { force: true } in order to disable Cypress default check 
        //             .should('be.checked')
        //         cy.wrap(radioButtons)
        //             .eq(1)
        //             .check({ force: true})
        //         cy.wrap(radioButtons)
        //             .eq(0)
        //             .should('not.be.checked')                    
        //         cy.wrap(radioButtons)
        //             .eq(2)
        //             .should('be.disabled')
        //     })
        // })

        // it.only('check boxes', () => {
        //     cy.visit('/')
        //     cy.contains('Modal & Overlays').click()
        //     cy.contains('Toastr').click()

        //     cy.get('[type="checkbox"]').then(checkboxes => {
        //         cy.wrap(checkboxes)
        //             .eq(0)
        //             .check({ force: true})
        //             .should('be.checked')
        //         cy.wrap(checkboxes)
        //             .eq(1)
        //             .should('not.be.checked')
        //         cy.wrap(checkboxes)
        //             .eq(2)
        //             .check({ force: true})
        //             .should('be.checked')
        //     })
        // })

    // it('lists and dropdowns', () => {
    //     cy.visit('/')

        // 1.
        // cy.get('nav nb-select').click()
        // cy.get('.option-list').contains('Dark').click()
        // cy.get('nav nb-select').should('contain', 'Dark')
        // cy.get('nb-layout-header').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        // 2.
        // cy.get('nav').find('nb-select').then( dropdown => {
        //     cy.wrap(dropdown).click()
        //     cy.get('.option-list').each( (listItem, listIndex) => {
        //         const itemText = listItem.text().trim().split(' ')[listIndex]

        //         const colors = {
        //             "Light": 'rgb(255, 255, 255)',
        //             "Dark": 'rgb(34, 43, 69)',
        //             "Cosmic": 'rgb(50, 50, 89)',
        //             "Corporate": 'rgb(255, 255, 255)',
        //         }
                
        //         cy.wrap(listItem).contains(itemText).click()
        //         cy.wrap(dropdown).should('contain', itemText)
        //         cy.get('nb-layout-header').should('have.css', 'background-color', colors[itemText])

        //         if(listIndex < 3){
        //             cy.wrap(dropdown).click()
        //         }
        //     })
            
        // })
    // })

    // 3.
    // it.only('webtables', () => {

    //     cy.visit('/')
    //     cy.contains('Tables & Data').click()
    //     cy.contains('Smart Table').click()

    //     cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
    //         cy.wrap(tableRow).find('.nb-edit').click()
    //         cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
    //         cy.wrap(tableRow).find('.nb-checkmark').click()
    //         cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
    //     })

    //     const tableData = {
    //         "ID": '7',
    //         "First Name": 'Zlatko',
    //         "Last Name": 'Antoniy',
    //         "Username": 'zantonius20',
    //         "E-mail": 'zantonius20@yahoo.com',
    //         "Age": '17'
    //     }

    //     cy.get('thead').find('.nb-plus').click()
    //     cy.get('thead').find('tr').eq(2).then( tableRow => {
    //         cy.wrap(tableRow).find('[placeholder="ID"]').type(tableData["ID"])
    //         cy.wrap(tableRow).find('[placeholder="First Name"]').type(tableData["First Name"])
    //         cy.wrap(tableRow).find('[placeholder="Last Name"]').type(tableData["Last Name"])
    //         cy.wrap(tableRow).find('[placeholder="Username"]').type(tableData["Username"])
    //         cy.wrap(tableRow).find('[placeholder="E-mail"]').type(tableData["E-mail"])
    //         cy.wrap(tableRow).find('[placeholder="Age"]').type(tableData["Age"])
    //         cy.wrap(tableRow).find('.nb-checkmark').click()
    //     })
    //     for(let i of Object.values(tableData)){ 
    //         cy.get('tbody').find('tr').contains('td', i).should('contain', i)
    //     }

    // })

    it('tooltips', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips')
        .contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')

    })

    it.only('dialog box', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // 1
        // cy.get('table').find('tbody').find('tr').eq(2)
        // .find('i[class="nb-trash"]').click()
        // cy.on('window:confirm', (confirm) => {
        //     expect(confirm).to.equal('Are you sure you want to delete?')
        // })

        // // 2
        // const stub = cy.stub()
        // cy.on('window.confirm', stub)
        // cy.get('tbody tr').eq(1).find('.nb-trash').click().then(() => {
        //     expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        // })

        // Using Chai Assertions

        // Example 1
        cy.get('thead').find('input').eq(2)
        .should('have.class', 'form-control')

        // Example 2
        cy.get('thead').find('a').eq(4).invoke('text').then(element => {
            cy.wrap(element.trim()).should('contain', 'E-mail')
        })

    })
    
})