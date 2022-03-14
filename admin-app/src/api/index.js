import axios from './axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
  getCategory(params) {
    return axios.get('/category/all', { params });
  },
  getProductAll(params) {
    return axios.get('/products/all', { params });
  },
  removeProduct(params) {
    return axios.delete(`/products/:${params}`);
  },
};
