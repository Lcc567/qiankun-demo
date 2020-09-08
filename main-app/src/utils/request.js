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
            return response.data
        });
    }

    request = (options) => {
        const instance = axios.create()
        const config = {
            ...options,
            baseURL: this.baseURL,
            timeout: this.timeout,
        }
        this.interceptors(instance, options.url)
        return instance(config)
    }
}
const { request } = new Api();

export default request;
