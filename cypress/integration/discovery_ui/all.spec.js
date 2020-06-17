import { Selectors } from '../../support/all.js'

const { datasetList, searchBox, datasetTitle, vehiclePositionsLink, dateLastIngested, dateLastUpdated, releaseDate, copyrightDate, previewTable, collapser, sortSelect } = Selectors

context('all', () => {

    it('header is correct, cota bus locations dataset is available and details page is correct', () => {
        cy.visit('/')
        cy.get(datasetList).children().should('have.length', 10)
        // cy.matchImageSnapshot({
        //     blackout: ['dataset-list-view']
        // })
        cy.get(sortSelect).select('Relevance')
        cy.get(searchBox).type('cota bus locations{enter}')
        cy.get(datasetTitle).first().click()
        cy.url().should('eq', 'https://discovery.smartcolumbusos.com/dataset/central_ohio_transit_authority/cota_stream')
        cy.get(vehiclePositionsLink)
        cy.get(collapser).click()
        cy.get(previewTable).should('not.be.visible');
        // cy.matchImageSnapshot('Details Page', {
        //     blackout: [
        //         dateLastIngested,
        //         dateLastUpdated,
        //         releaseDate,
        //         copyrightDate
        //     ]
        // })
    })
})