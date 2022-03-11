<template>
    <div class="statis-container">
      <div class="card">
        <Card/>
      </div>
      <div class="grap">
        <Grap/>
      </div>
    </div>
</template>

<script>
  import Card from './Card';
  import Grap from "./Grap";
  export default {
      components:{
        Card,
        Grap
      }
  }
</script>

<style scoped>

</style>
