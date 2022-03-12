import axios from 'axios';
import Store from '@/store/index';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use((config) => {
  if (config.url.includes('/passport')) {
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
      appkey: Store.state.userInfo.appkey,
    },
  };
}, (error) => {
  console.log(error);
});

instance.interceptors.response.use((res) => {
  console.log(res);
  if (res.data.status === 'fail') {
    return Promise.reject(res.data.msg);
  }
  return res.data.data;
}, (error) => {
  console.log(error);
});

export default instance;
