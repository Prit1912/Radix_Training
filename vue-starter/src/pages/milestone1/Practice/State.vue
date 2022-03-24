<template>
  <span class="h5 txt-primary border-bottom">State Management</span> <br>
    <br> Computed - {{count}} <button @click="incCount" class="btn btn-success" >Inc</button> 
    <br>{{usrStore.items}}
    <br> static - will updated after refresh - {{cnt}}
    <hr>
    <br> <p class="h6" > Using store to refs (without using getters and it is reactive) </p>
    {{myCount}} {{items}}
</template>

<script>
import { computed } from 'vue-demi';
// import {ref} from 'vue'
import {userStore} from '../../../store/user'
import { storeToRefs } from 'pinia'

export default {
    name: 'State',
    setup(){
        const usrStore = userStore();
        // let count = ref(usrStore.count)
        // let items = ref(usrStore.items)

        // store to ref
        const strItems = storeToRefs(usrStore)
        let items = strItems.items;
        let myCount = strItems.count;

        // using computed
        let count = computed(()=>usrStore.count)

        let cnt = usrStore.getCount

        let incCount = ()=>{
            usrStore.incrementCount()
        }

        usrStore.addItem('banana')

        return {
            incCount,
            usrStore,
            cnt,
            count,
            myCount,
            items
        }
    }
}
</script>

<style>

</style>