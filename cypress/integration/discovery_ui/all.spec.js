import { Selectors } from '../../support/all.js'

const { datasetList, searchBox, dataset, datasetTitle, vehiclePositionsLInk, dateLastIngested, dateLastUpdated, releaseDate, copyrightDate } = Selectors

context('all', () => {

    it('header is correct, cota bus locations dataset is available and details page is correct', () => {
        cy.visit('/')
        cy.get(datasetList).children().should('have.length', 10)
        cy.matchImageSnapshot({
            blackout: ['dataset-list-view']
        })
        cy.get(searchBox).type('cota bus locations{enter}')
        cy.get(dataset).should('have.length', 1)
        cy.get(datasetTitle).click()
        cy.url().should('eq', 'https://discovery.smartcolumbusos.com/dataset/central_ohio_transit_authority/cota_stream')
        cy.get(vehiclePositionsLInk)
        cy.matchImageSnapshot('Details Page', {
            blackout: [
                dateLastIngested,
                dateLastUpdated,
                releaseDate,
                copyrightDate
            ]
        })
    })
})