<template>
  
  <!-- text interpolation -->
  <p class="txt-primary h6" >text interpolation</p>
    {{msg}}

<!-- html interpolation -->
  <p class="txt-primary h6" >HTML interpolation</p>
    {{rawHTML}}
    <span v-html="rawHTML" ></span>

    <!-- attribute binding -->
  <p class="txt-primary h6" >Attribute binding</p>
    <div :id="id" >dynamic id</div>

    <!-- boolean attributes -->
  <p class="txt-primary h6" >Attribute binding</p>
    <button class="btn btn-danger" :disabled="isDisabled" >Click me</button>
</template>

<script>
export default {
    name: 'interPolation',
    setup(){
        const msg = 'welcome to vue starter';
        const rawHTML = '<h6 style="color: blue" >Prit Rojivadiya</h6>';
        const id = 'div1';
        const isDisabled = true;
        return{
            msg,
            rawHTML,
            id,
            isDisabled
        }
    }
}
</script>

<style>

</style>