import axios from '@/axios/index'

let api = {
    getCity_list() {
        return axios.get('/city')
    },
    getTop_nav() {
        return axios.get('/meituan/top_nav')
    },
    getSearchWord() {
        return axios.get('/meituan/searchWord')
    },
    getMinsuMsg() {
        return axios.get('/meituan/minsu')
    },
    getLoginMsg() {
        return axios.get('./meituan/user')
    }
}

export default api;