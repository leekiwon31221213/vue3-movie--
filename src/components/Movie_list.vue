<template>
  <div class="container">
    <div :class="{'no-result':!movies.length }" class="inner">
      <Loader v-if="loading"></Loader>
      <p v-if="msg" class="msg">{{ msg }}</p>
      <div v-else class="movies">
        <Movie_item v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '~/components/Loader';
import Movie_item from '~/components/Movie_item';


export default {
  components: {
    Movie_item,
    Loader
  },
  computed: {
    ...mapState('movie', ['movies', 'msg', 'loading'])
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';
.container{
  margin-top: 30px;
  .inner{
    background-color: $gray-100;
    padding:10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result{
      padding:70px 0;
    }
  }
  .msg{
    color:$gray-400;
    font-size: 15px;
  }
  .movies{
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 20px;
  }
}
</style>
