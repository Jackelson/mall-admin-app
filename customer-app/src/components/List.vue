<template>
  <div class="list-container">
    <div class="title">
      <div :class="{active: type === 'all'}" @touchend="changeType('all')">综合</div>
      <div :class="{active: type === 'sale'}" @touchend="changeType('sale')">销量</div>
      <div
        class="price"
        :class="{'price-up': type==='price-up', 'price-down': type === 'price-down'}"
        @touchend="changeType('price')">价格</div>
    </div>
    <div class="list">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <p>刷新次数: {{ count }}</p>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      type: '',
      isLoading: false,
    };
  },
  methods: {
    changeType(type) {
      if (type === 'price') {
        if (this.type === 'price-up') {
          this.type = 'price-down';
        } else {
          this.type = 'price-up';
        }
      } else {
        this.type = type;
      }
    },
    onRefresh() {
      this.isLoading = true;
    },
  },
};
</script>

<style scoped lang="less">
  .list-container {
    transform: translateY(0);
    transition: all .3s;
    position: fixed;
    border-top: 1px solid #eee;
    top: 150px;
    right: 0;
    width: 296px;
    bottom: 50px;
    overflow: auto;
    .title {
      position: sticky;
      top: 0;
      height: 25px;
      width: 280px;
      padding: 0 8px;
      margin: 0 auto;
      border-bottom: 1px solid #eee;
      display: flex;
      font-size: 12px;
      justify-content: flex-end;
      z-index: 100;
      background: #fff;
      > div {
        height: 25px;
        line-height: 25px;
        width: 50px;
        text-align: center;
        color: #aaa;
        position: relative;
      }
      .active, .price-up, .price-down {
        color: #ff1a90;
        font-weight: bold;
      }
      .price::after {
        content: '';
        border: 4px solid transparent;
        border-top-color: #aaa;
        position: absolute;
        bottom: 4px;
        right: 0;
      }
      .price::before {
        content: '';
        border: 4px solid transparent;
        border-bottom-color: #aaa;
        position: absolute;
        top: 4px;
        right: 0;
      }
      .price-up::before {
        border-bottom-color: #ff1a90;
      }
      .price-down::after {
        border-top-color: #ff1a90;
      }
    }
  }
</style>
