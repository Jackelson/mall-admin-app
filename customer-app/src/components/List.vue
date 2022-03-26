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
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <goodsCard :list = 'goodsList.list'/>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import goodsCard from './goodsCard.vue';

export default {
  components: {
    goodsCard,
  },
  data() {
    return {
      count: 0,
      type: '',
      isLoading: false,
      loading: false,
      finished: false,
      page: 1,
    };
  },
  computed: mapState({
    goodsList: (state) => state.goodsList,
    types: (state) => state.type,
  }),
  methods: {
    ...mapActions(['changeList']),
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
      this.changeList({
        type: this.types,
        page: this.page,
        size: 10,
        sort: this.type,
      });
    },
    onRefresh() {
      this.isLoading = true;
      this.changeList({
        type: this.types,
        page: 1,
        size: 10,
        sort: this.type,
      }).then(() => {
        this.isLoading = false;
        this.page += 1;
      });
    },
    onLoad() {
      if (this.finished) {
        return;
      }
      this.isLoading = true;
      this.changeList({
        type: this.types,
        page: this.page,
        size: 10,
        sort: this.type,
      }).then(() => {
        this.isLoading = false;
        this.page += 1;
        if (this.goodsList.list.length >= this.goodsList.total) {
          this.finished = true;
        }
      });
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
    top: 140px;
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
  .van-pull-refresh {
    overflow:  unset!important;
  }
</style>
