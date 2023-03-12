<template>
  <button @click="fuck">点击传递</button>
  <p>{{mess}}</p>
</template>

<script>
export default {
  name: "MyComponent",
  data(){
    return{
      mess:""
    }
  },
  methods:{
    fuck(){
      this.mess="fuck!!!!";
    }
  }
}
</script>

<style scoped>
h1 {
  color: darkgreen;
}
p{
  color: cornflowerblue;
}
li{
  color: darkturquoise;
}
</style>