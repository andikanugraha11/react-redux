const userReducer = (state = {
    username : 'Andika',
    email : 'm.andika.nugraha@gmail.com'
},action)=>{
    switch(action.type){
        case "SET_USERNAME_FULFILLED":
            state = {
                ...state,
                username : action.payload
            }
            break;
        case "SET_EMAIL":
            state = {
                ...state,
                email : action.payload
            }
            break;
        
            
    }
    return state;
}

export default userReducer;