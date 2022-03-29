<template>
  <p class="txt-primary h6" >computed</p>
  <div>{{name1}}</div>
  <button @click="changeName" class="btn btn-success" >Change name</button>
  <hr>
  <p class="txt-primary h6" >watchers</p>
  <button class="btn btn-warning" @click="decrease" :disabled="isDisabledDec" >dec</button> {{count}}  
  <button class="btn btn-warning" @click="increase" :disabled="isDisabled" >inc</button>   
    <hr>
  <p class="txt-primary h6" >watchers for nested object</p>
  <button class="btn btn-info" @click="chngNm">change</button>
  {{nestedObj}}
</template>

<script>
import _ from 'lodash'
import {ref, computed, watch} from 'vue'
export default {
    setup(){
        let name = ref('Prit') 
        let count = ref(5)
        let nestedObj = ref({
            name:'Prit',
            location: {
                city:'nvs'
            }
        });
        // watchers for object or nested object
        watch(()=> _.cloneDeep(nestedObj),(value,oldValue)=>{
            console.log(value.value,oldValue.value) // if nested object is reactive then we do not need to write .value again
        })
        let isDisabled = ref(false);
        let isDisabledDec = ref(false);
        let name1 = computed({
            get() {
                return name.value
            },
            set(newValue) {
                // set something
                 name.value = newValue
            },
        });

        watch(count,(value,oldValue)=>{
            console.log(value, oldValue)
            if(value >= 10){
                isDisabled.value = true;
            }else if(value <= 0){
                isDisabledDec.value = true;
            }else{
                isDisabled.value = false;
                isDisabledDec.value = false;
            }
        })

        let changeName = ()=>{
            name1.value  = 'Prit R.'
        }

        let chngNm = ()=>{
            nestedObj.value.name= 'Prit R.'
        }

        let increase = ()=>{
            count.value++;
        }

        let decrease = ()=>{
            count.value--;
        }

        return {
            name1,
            changeName,
            count,
            increase,
            isDisabled,
            isDisabledDec,
            decrease,
            nestedObj,
            chngNm
        }
    }
}
</script>

<style scoped>

</style>