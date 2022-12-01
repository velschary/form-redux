export const addname =(value)=> {
    return{
        type : 'ADD_NAME',
        payload : value
    }
}

export const deletename =(value)=> {
    return{
        type : 'DELETE_NAME',
        payload : value
    }
}