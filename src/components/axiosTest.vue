<template>
<h1>{{result}}</h1>
</template>

<script>
import axios from "axios";
import * as querystring from "querystring";
export default {
  name: "axiosTest",
  data(){
    return{
      result:""
    }
  },
  mounted() {
    console.log("开始渲染")
    let aData = new Date();
    console.log(aData)
    //get 请求
    // axios({
    //   method:"get",
    //   url:"http://localhost:5121/api/ScrapPool/DelScrapPool?SqeId=1"
    // }).then(res=>{
    //   console.log(res.data)
    //   this.result=res.data;
    // })
    //post请求
    axios({
      method:"post",
      url:"http://localhost:5121/api/ScrapPool/AddScrapPool",
      data:{
        "SeqId": 0,
        "ScrapTypeId": 0,
        "Name": "string",
        "Code": "string",
        "Length": 0,
        "Width": 0,
        "Height": 0,
        "StartX": 0,
        "EndX": "string",
        "StartY": 0,
        "EndY": "string",
        "DownWeight": 0,
        "UpWeight": 0,
        "StockTotal": 0,
        "Inserter": "string",
        "InstTime": "2023-03-12T14:23:53.777Z",
        "Modifier": "string",
        "ModifyTime": "2023-03-12T14:23:53.777Z"
      }
    }).then(res=>{
      console.log(res.data)
      this.result=res.data;
    })
  }
}
</script>

<style scoped>

</style>