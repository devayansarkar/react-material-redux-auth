import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 5000,
    params: {}
})

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const addToken = (token: string) => {
    axiosInstance.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const removeToken = () => {
    delete axiosInstance.defaults.headers.common.authorization;
}
export default axiosInstance;