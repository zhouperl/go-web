export function nameRule(rule,value,callback) {
    let reg = /^[\w-]{4,16}$/
    if(value === '') {
        callback(new Error("用户名不能为空"))
    }
    if(!reg.test(value)){
        callback(new Error("用户名不合法"))
    }
    else {
        callback()
    }

}

//密码正则匹配
export function passRule(rule,value,callback) {
    let reg = /^[\w-]{4,16}$/
    if(value === '') {
        callback(new Error("密码不能为空"))
    }
    if(!reg.test(value)){
        callback(new Error("密码不合法"))
    }
    else {
        callback()
    }

}