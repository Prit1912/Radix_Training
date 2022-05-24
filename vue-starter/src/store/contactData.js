import {defineStore} from 'pinia'

export const contactStore = defineStore({
    id: 'contactData',
    // state: ()=>{
    //     return {
    //         count: 0
    //     }
    // }
    state: ()=>({
        contactsDataArr: [],
    }),
    persist: {
        key: 'store-key',
        storage: window.localStorage,
        paths: ['contactsDataArr'],
        beforeRestore: context => {
          console.log('Before hydration...',context)
        },
        afterRestore: context => {
          console.log('After hydration...',context)
        },
      },
    getters:{
        getContactsData: (state)=>{
            return state.contactsDataArr
        }
    },
    actions:{
        // incrementCount(){
        //     this.count++;
        // },
        addContactData(data){
            this.contactsDataArr.push({...data, id: this.contactsDataArr.length+1});
        },
        removeContactData(id){
            console.log(id)
            this.contactsDataArr = this.contactsDataArr.filter((contact)=>{
                return contact.id !== id
            })
        },
        updateContactData(data, id){
            let contactDataIndex;
            for(let i = 0;i<this.contactsDataArr.length;i++){
                if(this.contactsDataArr[i].id === id){
                    contactDataIndex = i
                    break;
                }
            }
            Object.assign(this.contactsDataArr[contactDataIndex],data);
        }
    }
})