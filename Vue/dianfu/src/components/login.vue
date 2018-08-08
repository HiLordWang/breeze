<template>
    <div>
        <div class="toub_beij">
        <div class="fanhui_jt"><a @click="jump" href="javascript:;"><i class="fanh_jiant"><img src="../assets/images/fanh_jiant_hei.png"></i><span>返回</span></a></div>
        <div class="mingc_tb">登录</div>
        <div class="sy_zaix"><router-link to="/reg"><span>注册</span></router-link></div>
    </div>
    <div class="dengl_nr_k">
    <div class="dengl_logo"><img src="../assets/images/logo_dengl.png"></div>
    <div class="dengl_biaod_k">
        <div class="kuang_a">
            <input type="text" name="" placeholder="请输入手机号码/用户名" v-model="user">
        </div>
        <div class="kuang_a input_img2">
            <input type="password" name="" placeholder="输入密码" v-model="pass">
        </div> 
        <div :class="bLog" id="xuanz">
            <div class="dagouqr_s">
                <div class="dagou"></div>
                <span @click="gouxuan">我已阅读并同意</span><a href="#">《垫付网服务协议》</a>
            </div>
            <input class="dengl_anniu" value="登 录" @click='login' type="button"/>
        </div>
        <div class="wanjimm">
            <a href="#">忘记密码？</a>
        </div>
    </div>
    </div>
    </div>
</template>
<script> 
import {mapGetters} from 'vuex'
import * as type from '../store/type.js'
export default{
    data(){
        return {
            user:'',
            pass:'',
        }
    },
    computed:mapGetters([
        'bLog'
    ]),
    methods: {
        jump(){              
            this.$router.go(-1);
        },
        gouxuan(){
            if(this.$store.state.bLog){
                this.$store.dispatch(type.LOG_BT,'');
            }else{
                this.$store.dispatch(type.LOG_BT,'zhuzhong_tx');
            }
        },
        login(){
            this.$http({
                url:'http://localhost:3000/login',       
                params:{
                    user:this.user,
                    pass:this.pass,                    
                },
                }).then((res)=>{
                if(res.data[0].user){
                    this.$store.dispatch(type.LOG_IN,res.data[0]);
                    this.$router.push('/user');
                }else{
                    alert('用户名或密码错误，请重新登录');
                }                      
            })           
        }
    } 
}

</script>