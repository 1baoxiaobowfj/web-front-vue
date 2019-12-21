//from表单验证手机号码
export  const validatePhone = (rule:any, value:any, callback:any) => {
    if(!value) {
       return callback(new Error('电话号码不能为空'))
    } else {
        let result = testPhone(value);
        if(!result) {
            return callback(new Error('手机号码格式错误'))
        } else {
            callback();
        }
    }
}

//验证手机号码是不是1开头和11位
export  const testPhone = (value: string) => {
    return value && value[0] === '1' && value.length === 11;
}

//设置本地缓存
export const setStorage = function(key:string, obj: object|string) {
    if (typeof obj === 'string') {
        localStorage.setItem(key, obj);
    } else {
        localStorage.setItem(key, JSON.stringify(obj));
    }
}

//获取本地缓存
export const getStorage = function(key: string) {
    let  val = localStorage.getItem(key);
    if(val) {
        try {
            return JSON.parse(val);
        } catch (e) {
            return val;
        }
    } else {
        return ''
    }
}

//清除本地缓存 如果不传值，清除所以缓存
export const clearStorage = function(key: string) {
    if (key) {
        localStorage.removeItem(key);
    } else {
        localStorage.clear();
    }
}
