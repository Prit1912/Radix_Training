<template>
<div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-sm-4 col-lg-2 col-12 sidebar bg-primary p-3 position-relative">
          <div class="display-6 text-light mb-3">Milestone1</div>
          <Sidebar :topics="topics" />
      </div>
      <div class="col-md-9 col-sm-8 col-lg-10 col-12 mt-sm-0 mt-4 p-3">
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
        topics:['Interpolation'],
        // topics:['Interpolation','Data Binding', 'Reactivity', 'State', 'Components', 'Lifecycles', 'Directives', 'Event Handling', 'Methods', 'Computed', 'Watchers', 'Template Ref'],
      }
    }
}
</script>

<style>
  .sidebar{
    height: 100vh;
    border-right: 2px solid var(--secondary-color);
  }
</style>