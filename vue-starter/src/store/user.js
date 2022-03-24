import {defineStore} from 'pinia'

export const userStore = defineStore({
    id: 'user',
    // state: ()=>{
    //     return {
    //         count: 0
    //     }
    // }
    state: ()=>({
        count: 0,
        items: ['apple','mango']
    }),
    persist: {
        key: 'store-key',
        storage: window.localStorage,
        paths: ['count','items'],
        beforeRestore: context => {
          console.log('Before hydration...',context)
        },
        afterRestore: context => {
          console.log('After hydration...',context)
        },
      },
    getters:{
        getCount: (state)=>{
            return state.count
        }
    },
    actions:{
        incrementCount(){
            this.count++;
        },
        addItem(name){
            this.items.push(name)
            this.items = [...new Set(this.items)];
        }
    }
})