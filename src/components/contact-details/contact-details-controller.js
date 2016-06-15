class ContactListControllerDetails{
	constructor($stateParams)
	{
		cont[name, surname] = $stateParams.name.split(' ');
		
		this.cont = {
				name: name,
				surname: surname
		};
	}
}

export default [
    '$stateProvider',
	ContactListControllerDetails
];