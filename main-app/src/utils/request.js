import axios from 'axios';

class Api {
    constructor() {
        this.baseURL = 'http://127.0.0.1:7001';
        this.timeout = 3000;
    }

    interceptors(instance, url) {
        instance.interceptors.request.use(function (config) {
            return config
        });
        instance.interceptors.response.use(function (response) {
            // TODOS 401弹窗跳转登录
            if (response.data.code === 401) {
                console.log('token失效')
            }
            return response.data
        });
    }

    request = (options) => {
        const instance = axios.create();
        const token = localStorage.getItem('token');
        console.log('token', token);
        const config = {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout,
            headers: {
                Authorization: token
            }
        }
        this.interceptors(instance, options.url)
        return instance(config)
    }
}
const { request } = new Api();

export default request;
