const initialState = []

const reducer =(state = initialState, action)=> {
    switch(action.type){
        case "ADD_NAME" : 
        return[...state,action.payload]

        case "DELETE_NAME" : state.splice(action.payload, 1)
        return [...state]
        

        default: return state
    }
}
export default reducer