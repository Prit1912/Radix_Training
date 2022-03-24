<template>
  
  <!-- text interpolation -->
  <p class="txt-primary h6" >text interpolation</p>
    {{msg}}
    <hr>

<!-- html interpolation -->
  <p class="txt-primary h6" >HTML interpolation</p>
    {{rawHTML}}
    <span v-html="rawHTML" ></span>
    <hr>

    <!-- attribute binding -->
  <p class="txt-primary h6" >Attribute binding</p>
    <div :id="id" >dynamic id</div>
    <hr>

    <!-- boolean attributes -->
  <p class="txt-primary h6" >Boolean Attribute</p>
    <button class="btn btn-danger" :disabled="isDisabled" >Click me</button>
    <hr>

    <!-- using javascript expression -->
  <p class="txt-primary h6" >Javascript Expression</p>
  {{5 + 5}}<br />
  {{ 'reverse message '.split('').reverse().join('') }}
  <hr>


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