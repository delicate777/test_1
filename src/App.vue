<template>
  <div>
<axios-test>

</axios-test>
  </div>

</template>

<script>
import axiosTest from "@/components/axiosTest.vue";


export default {
  name: 'App',
  components: {
    axiosTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
