import angular from 'angular';
import uiRouter from 'angular-ui-router';
import roboHashController from './robo-hash-controller';
import roboHash from './robo-hash';

const dependencies = [
    uiRouter
];

export default angular
    .module('directiveRoboHash', dependencies)
    .controller('roboHashController', roboHashController)
    .directive('roboHash', roboHash)
