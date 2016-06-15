import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactListState from './contact-details-state';
import ContactDetailsController from './contact-details-controller';

const dependencies = [
    uiRouter
];

export default angular
    .module('contact-details-state-component', dependencies)
    .controller('ContactDetailsController', ContactDetailsController)
    .config(contactListState);
