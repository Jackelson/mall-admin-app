<template>
<<<<<<< HEAD
  <div>
      <h1>这是商品列表</h1>
=======
  <div class="list">
    <Seach @submit="handelSubmit"/>
>>>>>>> e8d480eee26bbb0e20f84b3539ae900c3e8feab4
  </div>
</template>

<script>
<<<<<<< HEAD
  export default {

=======
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
>>>>>>> e8d480eee26bbb0e20f84b3539ae900c3e8feab4
  }
</script>

<style scoped>

</style>
