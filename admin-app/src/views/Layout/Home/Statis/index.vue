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
import Card from './Card.vue';
import Grap from './Grap.vue';

export default {
  components: {
    Card,
    Grap,
  },
};
</script>

<style scoped>

</style>
