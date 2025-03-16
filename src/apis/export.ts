import http from '../utils/http'

//导出csv
const getCsv = (params:{username:string}) => {
    return http.get('/downloadCsv',{params})
}

//导出pdf
const getPDF = (params:{ username:string , source_url:string }) =>{
    return http.get('/downloadPdf',{
        params
    })
}

export {
    getCsv,
    getPDF
}