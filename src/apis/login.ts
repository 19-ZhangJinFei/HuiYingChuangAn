import http from '../utils/http'

const getlogin = (data:{ username:string , base_password:string }) => {
    return http.post('/userLogin',data)
}

const getRegister = (data:{ username:string , base_password:string }) =>{
    return http.post('/userRegister',data)
}

export {
    getlogin,
    getRegister
}