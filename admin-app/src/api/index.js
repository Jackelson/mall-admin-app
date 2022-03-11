import axios from "./axios";
export default {
    login(params){
        return axios.post('/passport/login',params)
    },
    getCategory(params){
       return axios.get('/category/all', {params})
    }
}
