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
    return request.get('/getGoodsList', {
      params,
    });
  },
};
