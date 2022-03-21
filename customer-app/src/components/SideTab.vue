<template>
  <div class="side-container" ref="side">
    <div
      :class="{item:true,active:i === index}"
      v-for="(n, i) in sideList"
      :key="i"
      @touchend="handelTouch($event,i)"
    >
      {{ i === 0 ? '全部' : n}}
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import move from '../utils/move';

export default {
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    ...mapState(['sideList']),
  },
  created() {
    this.$store.dispatch('changeList', {
      type: this.sideList[0],
      page: 1,
      size: 10,
    });
  },
  methods: {
    handelTouch(e, i) {
      const item = e.target;
      const { side } = this.$refs;
      const itemHeight = item.offsetHeight;
      const itemTop = item.getBoundingClientRect().top;
      const sideHeight = side.getBoundingClientRect().height;
      const sideTop = side.getBoundingClientRect().top;
      move(side.scrollTop, itemTop + itemHeight / 2 - sideHeight / 2 - sideTop, side, 'scrollTop');
      this.index = i;
    },
  },
};
</script>

<style scoped lang="less">
    .side-container{
      width: 70px;
      position: absolute;
      top: 150px;
      bottom: 50px;
      background:#f6f5ec;
      left: 0;
      overflow: auto;
      .item {
        text-align: center;
        height: 40px;
        line-height: 40px;
      }
      .active{
        position: relative;
        color: #d13193;
      }
      .active::before{
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         left: 0;
         width: 8px;
         height: 20px;
         background: #d13193;
         content: ' ';
      }
    }
  .side-container::-webkit-scrollbar{
    display: none;
  }
</style>
