import template from './contact-list.html';

function contactListRoute($stateProvider) {
    return $stateProvider
        .state('app.contactList', {
            url: 'contactList',
            views: {
                main: {
                    template: template,
                    controller: 'ContactListController as ContactListController'
                }
            }
        });
}


export default [
    '$stateProvider',
    contactListRoute
];