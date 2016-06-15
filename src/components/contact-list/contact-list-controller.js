//class ContactListController {
//    constructor() {
//        this.contacts = [
//            'ryan Howell',
//            'donna Murray',
//            'jack Fernandez',
//            'Nicholas Ward',
//            'Samuel Morris'
//        ];
//    }
//}

class ContactListController{
	
	constructor(ContactsService){
		ContactsService.fetchContacts()
		.then(response =>{this.contacts = response.data})
	}
		
}

export default [
    'ContactsService',
    ContactListController
];
