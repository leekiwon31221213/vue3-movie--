<template>
  <footer>
    <Logo></Logo>
    <a href="https://github.com/leekiwon31221213?tab=repositories" target="_blank">© {{ new Date().getFullYear() }} KIWON. All rights reserved.</a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default{
  components:{
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer{
  padding: 70px 0;
  text-align: center;
  opacity: 0.5;
  .logo{
    display: block;
    margin-bottom: 5px;
  }
}
</style>
