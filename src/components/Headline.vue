<template>
  <div class="container">
    <h1>
      <strong>OMDb API</strong>
      <br />
      THE OPEN
      <br />

      MOVIE DATABASE
    </h1>

    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.
      <br />
      If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main"; //부트스트랩 사용 시
.container{
  padding-top: 4rem;
}
h1{
  line-height: 1;
  font-family: "Noto Sans", serif;
  font-size: 7rem;

  strong{
    color:$primary;
  }
}
p{
  margin:3rem 0;
  color:$gray-600;
}
</style>
