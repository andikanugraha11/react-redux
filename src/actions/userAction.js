export function setUsername(name){
    return{
        type    : "SET_USERNAME",
        payload : name
    }
}

export function setEmail(email){
    return{
        type : "SET_EMAIL",
        payload : email
    }
}