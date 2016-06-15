class ContactsService{
	
	constructor($http){
		this.http = $http;
	}
	
	fetchContacts(){
		return this.http.get("http://localhost:3000/api/Contacts");
	}	
	
	fetchContactsDetails(id){
		if(contact.id)
			return this.http.get("http://localhost:3000/api/Contacts/" + id);
		else
			null;
	}
	
	save(contact){
		if(contact.id)
			this.http.put("http://localhost:3000/api/Contacts/" + contact.id, contact);
		else
			this.http.post("http://localhost:3000/api/Contacts", contact);
	}
}

export default[
		'$http',
		ContactsService
	]