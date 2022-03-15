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
  uploadInfo(params){
    return axios.post('/products/add',{ params });
  },
  getDeatil(params){
    return axios.get(`/products/${params}`);
  },
  edit(params){
    return axios.put('/products/edit',{ params });
  }
};
