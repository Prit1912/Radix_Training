<template>
  <p>Make first letter capital - {{name}}</p>
  <p>Convert into uppercase - {{name1}}</p>
</template>

<script>
import {ref} from 'vue'
import commonMixings from '../../../mixings/commonMixings'
export default {
    setup(){
        let name = ref('prit');
        let name1 = ref('prit');
        name.value = commonMixings.makeFirstLetterUpperCase(name.value)
        name1.value = commonMixings.convertIntoUpperCase(name1.value)
        return {
            name,
            name1
        }
    }
}
</script>

<style>

</style>