import axios from "axios";
<<<<<<< HEAD
=======
import Store from "@/store/index";
>>>>>>> e8d480eee26bbb0e20f84b3539ae900c3e8feab4
const instance = axios.create({
  baseURL:'https://mallapi.duyiedu.com/'
})
instance.interceptors.request.use((config)=>{
<<<<<<< HEAD
  console.log(config)
  // if(config)
   return config;
=======
   if(config.url.includes('/passport')){
        return config
   }else{
      return {
        ...config,
        params:{
            ...config.params,
            appkey:Store.state.userInfo.appkey
        }
      }
   }
>>>>>>> e8d480eee26bbb0e20f84b3539ae900c3e8feab4
},error=>{
    console.log(error);
})

instance.interceptors.response.use(res=>{
  console.log(res)
  if(res.data.status === "fail"){
      return Promise.reject(res.data.msg)
  }else{
     return res.data.data;
  }
},error => {
  console.log(error);
})

export default instance;
