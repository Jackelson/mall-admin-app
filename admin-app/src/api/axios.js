import axios from "axios";
const instance = axios.create({
  baseURL:'https://mallapi.duyiedu.com/'
})
instance.interceptors.request.use((config)=>{
  console.log(config)
  // if(config)
   return config;
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
