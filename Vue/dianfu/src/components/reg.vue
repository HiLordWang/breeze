<template>
    <div class="reg">
        <div class="toub_beij toub_beij_sy">
            <div class="fanhui_jt"><a @click="jump" href="javascript:;"><i class="fanh_jiant"><img src="../assets/images/fanh_jiant_hei.png"></i><span>返回</span></a></div>
            <div class="mingc_tb">注册</div>
            <div class="sy_zaix"><router-link to="/login"> 有账号<span>登录</span></router-link></div>
        </div> 
        <div class="zhuc_img">
            <img src="../assets/images/zhuc_img.jpg">
        </div>
        <div class="dengl_nr_k">  
            <div class="zhuc_kluang">
                <p><em>*</em>真实姓名：</p>
                <input type="text" name="" placeholder="请输入您的姓名" v-model="user">
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>证件类型：</p>
                <select>
                    <option>身份证</option>
                    <option>护照</option> 
                </select>
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>证件号码：</p>
                <input type="text" name="" placeholder="请输入您的证件号码">
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>电子邮件：</p>
                <input type="text" name="" placeholder="请输入您的邮箱地址">
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>设置密码：</p>
                <input type="password" name="" placeholder="请设置您的登录密码" v-model="pass">
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>确认密码：</p>
                <input type="password" name="" placeholder="在输入一次您的密码">
            </div>
            <div class="zhuc_kluang">
                <p>邀请码</p>
                <input type="text" name="" placeholder="请输入邀请码">
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>密保问题：</p>
                <select class="mib_wengt">
                    <option>我的小学学校名称是多少？</option>
                    <option>我的父亲是多少？</option> 
                    <option>我小时候最好的玩伴名字是？</option> 
                    <option>我的偶像是？</option> 
                    <option>我配偶的生日是？</option> 
                </select>
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>密保答案：</p>
                <input type="text" name="" placeholder="输入密保答案">
            </div>
            <div class="zhuc_kluang">
                <div class="zhuc_beiz">
                    <em>*备注：</em> 
                    <span>请牢记密保答案，后期更改密码使用！</span>
                </div>
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>手机号码：</p>
                <input type="text" name="" placeholder="输入手机号码" v-model="phone">
            </div>
            <div class="zhuc_kluang">
                <p><em>*</em>验证码：</p>
                <div class="tanxbq_yzm">
                    <input type="text" class="yanzm" name="" placeholder="输入验证码">
                    <input id="btnSendCode" class="hq_yanzm" type="button" value="获取验证码" onClick="sendMessage()" />
                </div>
            </div>
            <div :class="bReg" id="xuanz">
                <div class="dagouqr_s dagouqr_s_zcy">
                    <div class="dagou" @click="gouxuan"></div>
                    <span>我已阅读并同意</span><a href="#">《垫付网服务协议》</a>
                </div>
                <button class="dengl_anniu dengl_anniu_zcy" @click="reg">注 册</button>
            </div>
        </div>
    </div>
</template>
<script> 
import {mapGetters} from 'vuex'
import * as type from '../store/type.js'
     export default{
         data(){
             return{
                 user:'',
                 pass:'',
                 phone:''
             }       
         },
         computed:mapGetters([
            'bReg'
        ]),
        mounted() {
            window.onscroll=function(){
                var autoheight=document.body.scrollTop||document.documentElement.scrollTop;
                    if(autoheight>20){
                        $(".toub_beij_sy").css("position" ,"fixed")
                    }else{
                        $(".toub_beij_sy").css("position" ,"relative")
                }
            }
        },
        methods: {
            jump(){              
                this.$router.go(-1);
            },
            gouxuan(){
                if(this.$store.state.bReg){
                    this.$store.dispatch(type.REG_BT,'');
                }else{
                    this.$store.dispatch(type.REG_BT,'zhuzhong_tx');
                }
            },
            reg(){
                this.$http({
                    url:'http://localhost:3000/reg',        
                    params:{
                        user:this.user,
                        pass:this.pass,
                        phone:this.phone
                    },
                }).then((res)=>{
                    if(res.data=='注册成功'){
                         alert('注册成功，请登录');
                        this.$router.push('/login')
                        // this.$router.push({path:'/user',params:{},query:{}})
                    }else{
                        alert('用户名已存在，请重新注册');
                    }
                })
            }  

        }





    }        // gouxuan(){

            //     var XuanZ=document.getElementById('xuanz');
            //     if (XuanZ.className=='') {
            //         XuanZ.className='zhuzhong_tx';
            //     }
            //     else {
            //         XuanZ.className='';
            //     } 
            // } 
    



    // function gouxuan()
    // {
    //     var XuanZ=document.getElementById('xuanz');
    //     if (XuanZ.className=='') {
    //         XuanZ.className='zhuzhong_tx';
    //     }
    //     else {
    //         XuanZ.className='';
    //     }
        
    // } 
    // var InterValObj; //timer变量，控制时间
    // var count = 60; //间隔函数，1秒执行
    // var curCount;//当前剩余秒数
    // var code = ""; //验证码
    // var codeLength = 6;//验证码长度
    // function sendMessage() {
    // curCount = count;
    // var dealType; //验证方式
    // var uid=$("#uid").val();//用户uid
    // if ($("#phone").attr("checked") == true) {
    //     dealType = "phone";
    // }
    // else {
    //     dealType = "email";
    // }
    // //产生验证码
    // for (var i = 0; i < codeLength; i++) {
    //     code += parseInt(Math.random() * 9).toString();
    // }
    // //设置button效果，开始计时
    //     $("#btnSendCode").attr("disabled", "true");
    //     $("#btnSendCode").val( + curCount + "秒再获取");
    //     InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
    // //向后台发送处理数据
    //     $.ajax({
    //         type: "POST", //用POST方式传输
    //         dataType: "text", //数据格式:JSON
    //         url: 'Login.ashx', //目标地址
    //         data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
    //         error: function (XMLHttpRequest, textStatus, errorThrown) { },
    //         success: function (msg){ }
    //     });
    // }
    // //timer处理函数
    // function SetRemainTime() {
    //     if (curCount == 0) {                
    //         window.clearInterval(InterValObj);//停止计时器
    //         $("#btnSendCode").removeAttr("disabled");//启用按钮
    //         $("#btnSendCode").val("重新发送验证码");
    //         code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    
    //     }
    //     else {
    //         curCount--;
    //         $("#btnSendCode").val( + curCount + "秒再获取");
    //     }
    // }
</script>