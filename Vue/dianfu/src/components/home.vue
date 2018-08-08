<template>
    <div class="banner">
        <div class="swiper-container_banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><a href="#"><img src="../assets/images/banner.jpg"></a></div>
                <div class="swiper-slide"><a href="#"><img src="../assets/images/banner1.jpg"></a></div>
                <div class="swiper-slide"><a href="#"><img src="../assets/images/banner2.jpg"></a></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<style>

</style>
<script> 

   
    export default {
        mounted() {          
          var swiper = new this.$swiper('.swiper-container_banner', {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: '.swiper-pagination',

                },
            });
        }
    }
    


    
</script>