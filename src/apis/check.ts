import http from '../utils/http'

const getCheck = (data:{ username:string , url:string }) => {
    return http.post('/getSource',data)
}

export {
    getCheck,
}