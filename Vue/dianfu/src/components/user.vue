<template>
<div class="user">
    <div class="reglog" v-show="bl1">
      <div class="reg"><router-link to="/login">登录</router-link></div>
      <div class="log"><router-link to="/reg">注册</router-link></div>
    </div>

  <div class="count" v-show="bl2">
      <div class="toub_beij toub_beij_zhuy">
          <div class="fanhui_jt"><a href="geren_zhuy_bangz.html"><i class="fanh_jiant"><!-- <img src="images/fanh_jiant_hei.png"> --></i><span>帮助</span></a></div>
          <div class="mingc_tb">欢饮进入个人主页</div>
          <div class="sy_zaix"><a href="#"><div class="xiaoxi_tub_img"><img src="../assets/images/Shape_1.png"><i>99+</i></div></a></div>
      </div> 
    <div class="gerzx_toub"> 
    <a href="geren_zhuy_shez.html" class="gerzx_a1"><img src="../assets/images/xiang_you_jiant_da.png"></a> 
    <div class="gerzx_tx">
        <div class="toux_k"><a href="#"><img src="../assets/images/toux_mor.jpg"></a></div>
        <div class="mignz_k">
            <p><i>{{user}}</i><a href="javascript:;" @click="out">[安全退出]</a></p>
            <span>{{phone}}</span>
        </div> 
    </div>
    </div>
    <div class="gerzx_dh">
        <ul>
            <li><a href="geren_zhuy_faq_df.html"><h1><img src="../assets/images/zhuye_daoh_img_1.png"></h1><p>垫 付</p></a></li>
            <li><a href="geren_zhuy_zhaor_df.html"><h1><img src="../assets/images/zhuye_daoh_img_2.png"></h1><p>找人垫付</p></a></li>
            <li><a href="geren_zhuy_zhanghu.html"><h1><img src="../assets/images/zhuye_daoh_img_3.png"></h1><p>账 户</p></a></li>
            <li><a href="geren_zhuy_houtai_zx.html"><h1><img src="../assets/images/zhuye_daoh_img_4.png"></h1><p>信息反馈</p></a></li>
        </ul>
    </div>
    <div class="fengxian_tis"> 
        <div class="tub"><img src="../assets/images/fengxian_tis.png"></div>
        <a href="#">
            <p>垫付网存在一定的风险，用户使用须知用户使垫付网存在一定的风</p>
            <i>&nbsp;</i>
        </a>
    </div>
    <!-- 广告 -->
    <div class="banner_gg">
        <div class="swiper-container_banner_gg">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><a href="#"><img src="../assets/images/ger_zx_img1.jpg"></a></div>
                <div class="swiper-slide"><a href="#"><img src="../assets/images/ger_zx_img2.jpg"></a></div>
                <div class="swiper-slide"><a href="#"><img src="../assets/images/ger_zx_img3.jpg"></a></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>

  </div>

  <foot v-show="bl2"></foot>

</div> 
</template>

<script>

import foot from './foot'
// import {mapGetters} from 'vuex'
import * as type from '../store/type.js'   
 export default{
     data(){
         return {
             bl1:true,
             bl2:false,
             user:'',
             phone:''
         }       
     },
    //  computed:mapGetters([
    //     'bLin'
    //  ]),
      components: {
           foot
      },     
      mounted() {
        
         var swiper = new this.$swiper('.swiper-container_banner_gg', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        pagination: {
            el: '.swiper-pagination',
        },
        });

        if(this.$store.state.bLin.id){
  
            this.bl1=false;
            this.bl2=true;
            this.user=this.$store.state.bLin.user;
            this.phone=this.$store.state.bLin.phone;
        }

     },
     methods: {
         out(){
             this.$http({
                url:'http://localhost:3000/out',       
                }).then((res)=>{
                    alert('退出成功')
                    this.bl1=true;
                    this.bl2=false;
                    this.$store.dispatch(type.LOG_IN,{});
                    this.$router.push('/');                              
            })   
         }
     } 
 }
 
</script>



<style>

.reglog a{
    font-size: 52px
}

</style>
