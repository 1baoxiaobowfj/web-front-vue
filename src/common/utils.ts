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
