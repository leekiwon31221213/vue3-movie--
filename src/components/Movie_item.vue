<template>
  <RouterLink :to="`/movie/${movie.imdbID}`" class="movie" :style="{backgroundImage:`url(${movie.Poster})`}">
    <Loader v-if="imageLoading" :size="1.5" absolute></Loader>
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>

      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
import Loader from '~/components/Loader';
export default {
components:{
  Loader
},
props:{
  movie:{
    type:Object,
    default:function(){
      return{
      }
    },
  }
},
data(){
      return{
        imageLoading: true,
      }
    },
    mounted(){
      this.init()
    },
    methods: {
      async init(){
        const poster =this.movie.Poster
        // 플러그인으로 이동 ./plugins/loadImage.js
        // const img = document.createElement('img');
        // img.src = this.movie.Poster;
        // img.addEventListener('load' , ()=>{
        //   this.imageLoading = false
        // })

        if(!poster || poster ==='N/A'){
          this.imageLoading=false
        }else{
        await this.$loadImage(poster)
        this.imageLoading = false
      }
      }
    },
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';

.movie{
$width:200px;
 width:$width;
 height:$width * 3 / 2;
 border-radius: 4px;
 border-color: $gray-400;
 background-size: cover;
 overflow: hidden;
 position:relative;

 &:hover::after{
  content: "";
  position:absolute;
  top:0;
  left:0;
  bottom: 0;
  right:0;
  border: 5px solid $primary;
 }

 .info{
  position:absolute;
  left:0;
  bottom:0;
  background-color: #7e7e7e44;
  width: 100%;
  font-size: 14px;
  padding: 14px;
  text-align: center;
  backdrop-filter: blur(10px);
 }
 .year{
  color:$primary;
  font-weight: 600;
  font-size: 15px;
 }
}
</style>
