import template from './robo-hash.html';

function RoboHash(injectables){
	
	return{
		restrict: 'E',
		scope:{
			email: '<',
			width: '@',
			heigth: '@'
		},
	template: template,
	controller: 'RoboHashController as roboHashController',
	bindToController: true
			
		}
	}
export default[
	RoboHash  
];

