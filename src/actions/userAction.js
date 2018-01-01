export function setUsername(name){
    // without middleware -> not async
    // return{
    //     type    : "SET_USERNAME",
    //     payload : name
    // }

    // async with thunk middleware
    // return dispatch => {
    //     setTimeout(()=>{
    //         dispatch({
    //             type : "SET_USERNAME",
    //             payload : name
    //         })
    //     }   ,2000);
    // }

    // with promise -> redux-promise-middleware
    return{
        type    : "SET_USERNAME",
        payload : new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(name)
            }
            ,2000);
        })
    }
}

export function setEmail(email){
    return{
        type : "SET_EMAIL",
        payload : email
    }
}