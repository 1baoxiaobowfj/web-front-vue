import axios from 'axios';

// 添加请求拦截器
axios.interceptors.request.use((config: any) => {
    return config
}, (error: any) => {
    return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use((response: any) => {
    return response.data;
}, (error: any) => {
    return Promise.resolve(error.response)
})

const headers = { 'Content-Type': 'application/json' };

export default {
    post(url: string, data: any): any {
        return axios({
            method: 'post',
            url,
            data: data,
            timeout: 20000,
            headers: headers
        }).then((response) => {
            return response
        }).catch((res) => {
            return res
        })
    },
    get(url: string, params: any) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 20000,
            headers: headers
        }).then((response) => {
            return response
        }).catch((res: any) => {
            return res
        })
    },

    formdataPost(url: string, data: any, file: any): any {
        return axios({
            method: 'post',
            url,
            data: data,
        }).then((response) => {
            return response
        }).catch((res) => {
            file && file.onError()
            return res
        })
    },
    delete(url: string, params: any): any {
        return axios({
            method: 'delete',
            url,
            params,
            timeout: 20000,
        }).then((response) => {
            return response
        }).catch((res) => {
            return res
        })
    },
    put(url: string, data: any): any {
        return axios({
            method: 'put',
            url,
            data: data,
            timeout: 20000,
        }).then((response) => {
            return response
        }).catch((res: any) => {
            return res
        })
    }
}
