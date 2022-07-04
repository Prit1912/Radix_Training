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
      }
    },
  };
  