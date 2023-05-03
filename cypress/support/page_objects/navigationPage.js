function selectGroupMenuItem(groupName){
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if(attr.includes('left')){
                cy.wrap(menu).click({ force: true})
            }
        })
    })

}

export class NavigationPage{
    formLayoutsPage(){
        selectGroupMenuItem('Forms')
        cy.contains('Smart Table').click({force: true})
    }

    datepickerPage(){
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()
    }

    toasterPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    tooltipPage(){
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
        
    }
} 

export const navigateTo = new NavigationPage()