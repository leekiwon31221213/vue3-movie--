<template>
  <h1>Child: {{ msg }}</h1>
</template>

<script>
export default{
  props:{
    msg:{
      type:String,
      default:''
    }
  }
}
</script>
