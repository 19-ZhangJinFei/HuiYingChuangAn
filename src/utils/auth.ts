const TOKEN_KEY = 'token'

const getToken = () =>{
    return localStorage.getItem(TOKEN_KEY)
}

export {
    getToken
}