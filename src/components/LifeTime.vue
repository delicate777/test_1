<template>
  <h1>生命周期函数</h1>
  <button @click="message+=1">点击更改</button>
  <p>{{message}}</p>
</template>

<script>
export default {
  name: "LifeTime",
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("mount")
  },
  mounted() {
    //网络请求
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeupdate")
  },
  updated() {
    console.log("update")
  },
  beforeUnmount() {
    console.log("beforeunmount")
  },
  unmounted() {
    console.log("unmounted")
  },
  data(){
    return{
      message:10
    }
  }
}
</script>

<style scoped>
h1 {
  color: aqua;
}
</style>