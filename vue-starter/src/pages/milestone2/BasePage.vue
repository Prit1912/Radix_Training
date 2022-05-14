<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-md-3 col-sm-4 col-lg-2 col-12 sidebar bg-primary position-relative"
      >
        <div class="display-6 text-light p-3">Milestone2</div>
        <hr style="color: wheat" />
        <Sidebar :topics="topics" />=
        <el-button class="toggleBtn" :icon="arrowIcon" @click="expand()" ></el-button>
      </div>
      <div
        class="col-md-9 col-sm-8 col-lg-10 col-12 mt-sm-0 mt-4 p-3 mt-auto ms-sm-auto content"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/sidebar/Sidebar.vue";
import {ArrowDownBold, ArrowUpBold} from '@element-plus/icons-vue'
export default {
  name: "Milestone2BasePage",
  components: {
    Sidebar,
  },
  data() {
    return {
      topics: [
        "Mixings",
        "Class and Style Binding",
        "Reusable Component",
        "Tailwind CSS",
        "Axios",
        // "Directives",
        // "Event Handling",
        // "Computed and Watchers",
        // "Forms"
      ],
      ArrowDownBold,
      ArrowUpBold,
      arrowIcon: ArrowDownBold
      // topics:['Interpolation','Data Binding', 'Reactivity', 'State', 'Components', 'Lifecycles', 'Directives', 'Event Handling', 'Methods', 'Computed', 'Watchers', 'Template Ref'],
    };
  },
  methods:{
    expand( ){
      let classArr = document.getElementsByClassName('sidebar')[0].classList;
      if(classArr.contains('fullHeight')){
       this.arrowIcon = ArrowDownBold
       classArr.remove('fullHeight')
      }else{
        this.arrowIcon = ArrowUpBold
        classArr.add('fullHeight')
      }
    }
  }
};
</script>

<style>
.sidebar {
  position: sticky !important;
  top: 7vh;
  left: 0;
  height: 93vh;
  /* overflow: none;  */
  box-shadow: 3px -2px 3px var(--secondary-color);
  z-index: 99;
}
.content {
  /* margin-top: auto; */
  /* margin-left: auto; */
  z-index: 98;
}
.toggleBtn{
  display: none !important;
}
@media (max-width: 576px) {
  .sidebar{
    height: 80px;
    overflow: hidden;
  }

  .fullHeight{
    height: 100% !important;
  }

  .toggleBtn{
    display: block !important;
    position: absolute;
    right: 20px;
    top: 40px;
    transform: translateY(-50%);
  }
}
</style>
