import request from '../utils/request'

export const login = (data) => {
    return request({
        url: "/login",
        method: "post",
        data
    });
}

export const verify = () => {
    return request({
        url: "/verify",
        method: "get",
    });
}

