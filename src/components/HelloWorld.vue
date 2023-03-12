<template>
  <div>
    <p>事件</p>
    <input type="text" v-model.lazy="username">
    <p>{{username}}</p>
    <input type="text" v-model.lazy="password">
    <select v-model="password">
      <option>China</option>
      <option>Japan</option>
    </select>
    <p>{{password}}</p>
    <button @click="num+=1">点击:num={{num}}</button>
    <button @click="clickFun">按钮</button>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      num:1,
      n:0,
      username:"",
      password:"",
      message:"消息"
    }
  },
  methods:{
    clickFun(){
      if(this.n===0){
        this.message="消息没了";
        this.n+=1;
      }
      else{
        this.n=0;
        this.message="消息回来了";
      }

    }
  }
}
</script>

