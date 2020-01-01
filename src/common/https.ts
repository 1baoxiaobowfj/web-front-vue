import axios from 'axios';
import store from '../store';
import { Message } from 'element-ui'

// 添加请求拦截器
axios.interceptors.request.use((config: any) => {
    //解决IE浏览器下get方法强缓存的问题
    if (config.method === 'get') {
        config.params = {
            _t: Date.parse(new Date().toString()) / 1000,
            ...config.params
        }
    }
    if (store.state.token && !config.headers['X-Token']) {
        config.headers['X-Token'] = store.state.token;
    }
    
    return config
}, (error: any) => {
    return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use((response: any) => {
    return response.data;
}, (error: any) => {
    const { status } = error.response;
    errorMsg(status);
    
    return Promise.reject(new Error(
        error.response ? error.response.data : '网络错误'
    ))
})

const errorMsg = (status: any) => {
    switch(status) {
        case 500:
            Message.error('服务器异常')
            break;
        default:
            break;
    }
}

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
