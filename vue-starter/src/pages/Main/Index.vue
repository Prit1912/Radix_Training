<template>
  <div class="head">
    <!-- <span class="heading"><img src="../../assets/download.png" width="250"  alt=""> </span>  -->
    <!-- <span class="courseName"><img src="../../assets/download.png" width="250"  alt=""> </span>  -->
    <span class="courseHeading">Vue Starter</span>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped>
*{
  overflow: hidden;
}
.head {
  height: 80vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
}

.heading {
  position: relative;
  animation: slide 3s forwards;
  transition: all 3s ease;
  animation-timing-function: linear
}

.courseName {
  font-size: 50px;
  position: relative;
  animation: slide1 1.5s forwards 1.5s;
  transition: all 1.5s ease-in;
}

.courseHeading{
  position: absolute;
  z-index: -1;
  visibility: hidden;
  animation: appear 1.5s forwards;
  transition: all 1.5s ease-in;
  color: var(--secondary-color) !important
}

@keyframes appear {
  0% {
    visibility: hidden;
    font-size: 0px;
  }
  100% {
    visibility: visible;
    font-size: 50px;
  }
}

@keyframes slide {
  0% {
    left: -1100px;
  }
  40.5%{
    transform: skew(0deg);
  }
  41%{
    transform: skew(-20deg);
  }
  100% {
    left: 1200px;
    transform: skew(0deg);
  }
}
@keyframes slide1 {
  0% {
    top: 0px;
    left: 0px;
    transform: rotateZ(0deg);
  }
  100% {
    top: -500px;
    left: 500px;
    transform: rotateZ(-360deg);
  }
}
</style>
