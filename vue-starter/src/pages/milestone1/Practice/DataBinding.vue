<template>
    <p class="txt-primary h6" >Data binding</p>
     <div id = "databinding">  
         <p>{{title}}</p>  
         <!-- <a href = "hreflink" target = "_blank"> Click Here </a> <br/>  this will not work --> 
         <!-- <a href = "{{hreflink}}" target = "_blank">Click Here </a>  <br/>  this will not work -->
         <a v-bind:href = "hreflink" target = "_blank">Click Here </a>   <br/>  
      </div>  
      <hr>

    <p class="txt-primary h6" >Class binding</p>
    <p :class="{active:iaActive, hasError: isError}" >this is class binding example</p>
    <p :class="[errorClass, activeClass]" >this is class binding example</p>
    <hr>

    <p class="txt-primary h6" >Style binding</p>
    <p :style="styleObject" >this is an example of style binding</p>
    <hr>

</template>

<script>
export default {
    name:'DataBinding',
    data(){
        return{
            title : "Data Binding Simple Example",  
            hreflink : "http://www.google.com",
            iaActive: false,  
            isError: true,
            activeClass: 'active',
            errorClass: 'hasError',
            styleObject: {
                'text-decoration': 'line-through',
                'color': 'brown'
            }
        }
    }
}
</script>

<style scoped>
    .active{
        background-color: rgb(0, 255, 21);
    }
    .hasError{
        color: red;
    }
</style>