<template>
  <div class="not-found-wrap">
    <h1>404</h1>
    <p class="message">페이지를 찾을 수 없습니다.</p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";
.not-found-wrap{
  line-height: 1.3;
  font-family: 'Oswald, sans-serif';
  text-align: center;
  padding:80px 20px;
  h1{
    font-size: 120px;
    color:$primary;
  }
  p{
    font-size: 22px;
  }
}
</style>
