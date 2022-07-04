export const contact = {
    namespaced: true,
    strict: true,
    state: {
      contacts: [],
    },
    getters:{
        getAllContacts(state){
            return state.contacts;
        }
    },
    mutations: {
      setAllContacts(state, contacts) {
        state.contacts = contacts;
      },

      addContact(state, contact){
        state.contacts.push(contact);
      },

      updateContact(state, contact){
        state.contacts.forEach((c)=>{
          if(c._id === contact.id){
            Object.assign(c, contact.data)
          }
        })
      }
    },
    actions: {
      // set all contacts
      setAllContacts({ commit }, contacts) {
        commit("setAllContacts", contacts);
      },

      // add contact
      addContact({commit}, contact){
        commit("addContact", contact)
      },

      // update contact
      updateContact({commit}, contact){
        commit("updateContact", contact)
      }
    },
  };
  