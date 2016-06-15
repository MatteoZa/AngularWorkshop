import template from './contact-details.html';

function contactDetailsRoute($stateProvider) {
    return $stateProvider
        .state('app.contactDetails', {
            url: 'contactDetails/:name',
            views: {
                main: {
                    template: template,
                    controller: 'ContactDetailsController as ContactDetailsController'
                }
            }
        });
}


export default [
    '$stateProvider',
    contactDetailsRoute
    
];