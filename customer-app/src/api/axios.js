import axios from 'axios';

const request = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/goods/',
});
request.interceptors.request.use((config) => ({
  ...config,
  params: {
    ...config.params,
    appkey: 'lishushuai_1646647420291',
  },
}));
request.interceptors.response.use((res) => res.data);

export default request;
