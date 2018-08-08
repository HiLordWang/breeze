<template>
    <div class="luj">
        <div class="luj_nk">
            <em></em>
            <a href="index.html">首页</a>
            <i></i>
            <a href="guany_wom.html">{{cmg}}</a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        computed: {

            cmg(){               
                switch(this.$route.path){
                    case '/about':
                    return '关于垫付'
                    break;
                    default:
                    return '垫付新闻'
                }               
            }
        },
    }
</script>
