<template>
  <header>
    <Logo></Logo>
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :class="{active:isMatch(nav.path)}" :to="nav.href" class="nav-link" active-class="active">{{nav.name}}</RouterLink>
      </div>
    </div>
    <div class="user" @click="toAbout">
      <img :src="img" :alt="name" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import { mapState } from 'vuex';
export default {
  components:{
    Logo
  },
  data(){
    return{
      navigations:[
        {
          name: 'Search',
          href:'/',
        },
        {
          name: 'Movie',
          href:'/movie/tt4520988',
          path: /^\/movie/
        },
        {
          name: 'About',
          href:'/about',
        },
      ]
    }
  },
  computed:{
    ...mapState('about',[
      'logo',
      'name',
    ]),
    img() {
    return this.logo;
  }
  },

  methods:{
    isMatch(path){
      if(!path){
        return false
      }else{
        console.log(this.$route)
        return path.test(this.$route.fullPath)
      }
    },
    toAbout(){
      console.log('!!!')
        this.$router.push('/about')
      }
  }
}
</script>

<style lange="scss" scoped>
@import "~/scss/main";
header{
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position:relative;
  .logo{
    margin-right: 40px;
  }
  .nav{flex:1;}
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding:6px;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;

    transition: 0.3s ease-in-out;
    &:hover{
      background-color: darken($gray-200, 10%);
    }
    img{
      width: 100%;
    }
  }
  @include media-breakpoint-down(sm){
    .nav{
      display:none;
    }
  }
}
</style>
