export const Selectors = {
    datasetList: '[data-testid=dataset-list]',
    searchBox: '[data-testid=search]',
    dataset: 'data-card',
    datasetTitle: '.details > .title',
    vehiclePositionsLink: '[href="http://realtime.cota.com/TMGTFSRealTimeWebService/Vehicle/VehiclePositions.pb"]',
    dateLastIngested: ':nth-child(8) > .rt-tr > [style="flex: 100 0 auto; width: 100px;"]',
    dateLastUpdated: ':nth-child(13) > .rt-tr > [style="flex: 100 0 auto; width: 100px;"]',
    releaseDate: ':nth-child(17) > .rt-tr > [style="flex: 100 0 auto; width: 100px;"]',
    copyrightDate: '.copyright'
}