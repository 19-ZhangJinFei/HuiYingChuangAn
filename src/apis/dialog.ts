import http from '../utils/http'

const getLogInfo = (params:{ username:string }) =>{
    return http.get('/getLogInfo',{params})
}

export {
    getLogInfo
}