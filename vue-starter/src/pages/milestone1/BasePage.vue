<template>
<div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-4 col-lg-2 col-12 sidebar bg-primary position-relative">
          <div class="display-6 text-light mb-3 p-3">Milestone1</div>
          <hr style="color: wheat" >
          <Sidebar :topics="topics" />
      </div>
      <div class="col-md-9 col-sm-8 col-lg-10 col-12 mt-sm-0 mt-4 p-3 mt-auto ms-sm-auto content">
        <router-view></router-view>
      </div>
    </div>
  </div>
  
</template>

<script>
import Sidebar from '../../components/sidebar/Sidebar.vue'
export default {
    name: 'Milestone1BasePage',
    components:{
      Sidebar
    },
    data(){
      return{
        topics:['Interpolation','Data Binding','Reactivity', 'State', 'Lifecycles'],
        // topics:['Interpolation','Data Binding', 'Reactivity', 'State', 'Components', 'Lifecycles', 'Directives', 'Event Handling', 'Methods', 'Computed', 'Watchers', 'Template Ref'],
      }
    }
}
</script>

<style>
  .sidebar{
    position: sticky !important;
    top: 7vh;
    left: 0;
    height: 93vh;
    /* overflow: none;  */
    box-shadow: 3px -2px 3px var(--secondary-color);
    z-index: 99;
  }
  .content{
    /* margin-top: auto; */
    /* margin-left: auto; */
    z-index: 98;
  }
  @media (max-width: 576px) {
    .sidebar{
      height: 100%;
    }
  }
</style>