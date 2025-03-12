<template>
  <Headline />
  <Search></Search>
  <movie_list></movie_list>
</template>

<script>
import Headline from '~/components/Headline';
import Search from '~/components/Search';
import Movie_list from '~/components/Movie_list';


export default{
  components:{
    Headline,
    Search,
    Movie_list
  },

  created() {
    this.$store.commit('movie/resetMovies');
  },
}
</script>
