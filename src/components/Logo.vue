<template>
  <RouterLink to="/" class="logo">
    <span>OMDbApi</span>
    .COM
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main"; //부트스트랩 사용 시


.logo{
  font-family: "Noto Sans", serif;
  font-size: 2rem;
  color:$black;
  text-decoration: none;
  font-weight: 600;
  &:hover{
    color:$black;
  }
  span{
    color:$primary;
  }
}
</style>
