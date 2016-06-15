class ContactDetailController {
	
    constructor($stateParams, ContactsService) {
    	ContactsService.fetchContactsDetails($stateParams.id)
		.then(response =>{this.contact = response.data})
		
		this.ContactsService = ContactsService;
    }
    
    save(){
    	this.ContactsService.save(this.contact);
    }
}

export default [
    '$stateParams',
    'ContactsService',
    ContactDetailController
];
