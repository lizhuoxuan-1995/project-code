import axios from 'axios'
axios.defaults.baseURL = 'https://www.fastmock.site/mock/44d626513d60f33dc283d42e5d8187cf/mtApp'
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axios;