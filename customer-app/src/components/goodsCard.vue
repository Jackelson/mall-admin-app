<template>
  <div class="goods-card">
    <div class="card" v-for="n in list" :key="n._id">
      <div class="img-content">
        <img  :src="n.images[0]" :alt="n.title">
      </div>
      <div class='card-content'>
        <div class="title">{{n.title}}</div>
        <div class="desc">{{n.desc}}</div>
        <div class="overflow-hidden tags">
          <div v-for="i in n.tags" :key="i" >{{i}}</div>
        </div>
        <div class="overflow-hidden prices">
          <div class="price-off">￥{{ n.priceOff || n.price}}</div>
          <div class="price" v-if="n.priceOff">￥{{n.price}}</div>
        </div>
<!--        <div class="price">{{n.price}}</div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
};
</script>

<style scoped lang="less">
  .card{
    width: 100%;
    box-sizing: border-box;
    height: 100px;
    display: flex;
    .img-content {
      width: 90px;
      margin-right: 20px;
      img {
        width: 90px;
        height: 90px;
      }
    }
    .card-content{
      flex: 1;
      position: relative;
      .title {
        font-size: 13px;
        color: #1a1a1a;
        margin-top: 5px;
      }
      .desc {
        color: #aaa;
        font-size: 11px;
        margin-top: 5px;
      }
      .tags {
        display: flex;
        margin-top: 4px;
        >div {
          font-size: 10px;
          border: 1px solid #aaa;
          padding: 1px 2px 2px 2px;
          color: #aaa;
          border-radius: 3px;
          margin-right: 5px;
        }
      }
      .prices{
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        .price-off {
          font-size: 14px;
          color: #ff1a90;
          font-weight: 600;
          margin-right: 5px;
        }
        .price {
          font-size: 12px;
          color: #aaa;
          text-decoration: line-through;
        }
      }
    }
  }
</style>
