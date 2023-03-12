<template>
<div>
  <swiper>
    <SwiperSlide>
      <img alt="Vue logo" src="../assets/logo.png">
    </SwiperSlide>
    <SwiperSlide>
      <img alt="Vue logo2" src="../assets/logo.png">
    </SwiperSlide>
    <SwiperSlide>
      <img alt="Vue logo3" src="../assets/logo.png">
    </SwiperSlide>
    <SwiperSlide>
      <img alt="Vue logo4" src="../assets/logo.png">
    </SwiperSlide>
  </swiper>
</div>
</template>

<script>
import {Swiper,SwiperSlide} from "swiper/vue";
import axios from "axios";
import 'swiper/css';
export default {
  name: "testSwiper",
  components:{
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

</style>