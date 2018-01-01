const mathReducer = (state = {
    result : 1,
    lastValues : []
},action)=>{
    switch(action.type){
        case "ADD":
            state = {
                // result : state.result,
                // lastValues : state.lastValues,
                ...state,
                result : state.result + action.payload,
                // Push array
                lastValues : [...state.lastValues, action.payload]
            }
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result : state.result - action.payload,
                lastValues : [...state.lastValues, action.payload]
            }
            break;
        default :
            state = {
              
            }
    }
    return state;
}

export default mathReducer;