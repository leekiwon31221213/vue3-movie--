<template>
  <div class="container">
    <input v-model="title" type="text" class="form-control" @keyup.enter="apply" placeholder="영화 시리즈를 검색해주세요" />

    <div class="selects">
      <select v-for="filter in filters" :key="filter.name" v-model="$data[filter.name]" class="form-select">
        <option value="" v-if="filter.name === 'year'">년도</option>
        <option v-for="item in filter.items" :key="item">{{ item }}</option>
      </select>
    </div>

    <button class="btn btn-primary" @click="apply">클릭</button>
  </div>
</template>

<script>
export default{
  data(){
    return{
      title:'',
      type:'movie',
      number:10,
      year:'',
      filters:[
        {
        name:'type',
        items:['movie','series','episode'],
      },
      {
        name:'number',
        items:[10,20,30]
      },
      {
        name:'year',
        items: (function(){
          const years = []
          const thisYear = new Date().getFullYear() // 2025
          for(let i = thisYear; i >= 1900; i-= 1){
            years.push(i)
          }
          return years
        })()
      }
    ],
    }
  },
  methods:{
    async apply(){
      this.$store.dispatch('movie/searchMovies',{
        title:this.title,
        type:this.type,
        year:this.year,
        number: this.number,
      })

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.container{
 display: flex;
 >*{
  margin-right: 1rem;
  font-size: 14px;
  &:last-child{
    margin-right: 0;
  }
 }
 .selects{
  display: flex;
  select{
    width: 120px;
    margin-right: 1rem;
    &:last-child{
      margin-right: 0;
    }
  }

 }
 .btn{
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
  @include media-breakpoint-down(lg){
   display: block;

   input{
    margin-right:0;
    margin-bottom:10px;
   }
   .selects{
    margin-right:0;
    margin-bottom:10px;
    select{
      width: 100%;
    }
   }
   .btn{
    width: 100%;
   }
  }
}
</style>
