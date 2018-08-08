<template>
<div>
    <banner></banner>
    <div class="news_k">
        <ul>
            <li v-for="item of list">
                <router-link :to="'/detail/'+item.id">
                    <h1><img :src='item.src'></h1>
                    <p>{{item.title}}</p>
                    <h2>日期：{{item.time}}</h2>
                </router-link>
            </li>     
        </ul>
      
        <div class="jzgd_k" @click="more">
            <a href="#">加载更多</a>{{$route.path}}
        </div>
    </div>
    <foot></foot>
</div>
</template>
<script>
import foot from './foot'
import banner from './banner'
    export default{
        data(){
            return{
                list:[]
            }
        },

        mounted(){
            this.$http({
                url:'http://localhost:3000/news'
            }).then(
                (res)=>{
                    this.list=res.data
                }
            )

        },
        methods: {
          more(){
             this.$http({
                url:'http://localhost:3000/news/more'
            }).then(
                (res)=>{
                    this.list=res.data
                }
            ) 
          }  
        },
        components: {
            banner,foot
        }

    }   
</script>
