import request from './axios';

export default {
  getSide(type) {
    return request.get('/getsidebar', {
      params: {
        type,
      },
    });
  },
  getGoods(params) {
    console.log(params);
    return request.get('/getGoodsList', {
      params,
    });
  },
};
