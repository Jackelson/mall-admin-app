<template>
  <div class="list">
    <Seach @submit="handelSubmit"/>
  </div>
</template>

<script>
  import Seach from './components/seach'
  export default {
      components:{
        Seach
      },
      methods:{
        handelSubmit(val){
          console.log(val)
        }
      }
  }
</script>

<style scoped>

</style>
