<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  data(){
    return{
      msg: 'Hello VUE'
    }
  },
  mounted(){
    console.log(this.msg)
  }
}
</script>
