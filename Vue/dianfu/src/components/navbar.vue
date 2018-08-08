<template>
    <div class="toub_beij toub_beij_sy">
        <router-link to='/home'></router-link>
        <div class="logo"> <router-link to='/home'><img src="../assets/images/logo_sy.png"></router-link></div>
        <div class="sy_zaix"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2239329788&site=qq&menu=yes">在线咨询</a></div>
    </div>
</template>
<script>
    export default{
        mounted() {
            window.onscroll=function(){
            var autoheight=document.body.scrollTop||document.documentElement.scrollTop;
            if(autoheight>20){
                $(".toub_beij_sy").css("position" ,"fixed")
                }else{
                    $(".toub_beij_sy").css("position" ,"relative")
                }
            }
        }  
    }
</script>