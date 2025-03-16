import http from '../utils/http'

const getInform = (params:{username:string , url:string}) => {
    return http.get('/getSource',{params})
}

export {
    getInform
}