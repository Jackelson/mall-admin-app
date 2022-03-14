import axios from "./axios";
export default {
    login(params){
        return axios.post('/passport/login',params)
<<<<<<< HEAD
=======
    },
    getCategory(params){
       return axios.get('/category/all', {params})
>>>>>>> e8d480eee26bbb0e20f84b3539ae900c3e8feab4
    }
}
