<template>
  <div class="about">
    <div class="photo">
      <Loader v-if="imageLoading" absolute></Loader>
      <img :src="img" :alt="name" />
    </div>

    <div class="info-wrap">
      <p class="name">{{ name }}</p>
      <p class="email">{{ email }}</p>
      <p class="phone">{{ phone }}</p>
    </div>
  </div>
</template>

<script>
import Loader from '~/components/Loader';
import { mapState } from 'vuex';

export default {
  components:{
    Loader
  },
  data(){
    return{
      imageLoading: true
    }
  },
  computed:{
    ...mapState('about',[
      'logo',
      'name',
      'email',
      'phone'
    ]),
    img() {
    return this.logo;
  }
  },
  mounted(){
    this.init()
  },
  methods:{
    async init(){
    await this.$loadImage(this.img)
    this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  text-align: center;
  .photo{
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img{
      width: 80%;
    }
  }
  .info-wrap{
    font-size: 20px;
    font-family: 'Oswald, sans-serif';
    margin-bottom: 20px;
  }
}
</style>
