import http from '../http-common'

class contactService{

     // Get all contacts
     getAllContacts(page,limit,sortOrder, search){
        return http.get(`/contacts`, {params:{page,limit,sortOrder, search}})
    }

    // add contact
    addContact(data){
        return http.post("/contacts", data)
    }

    // delete contact
    deleteContact(contactId){
        return http.delete( `/contacts/${contactId}`)
    }

}

export default new contactService();