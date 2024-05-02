const InitialState = {
    value :''
}

const reducer = (state = InitialState ,action) =>{
    switch(action.type){
        case 'set_value':
        return{
            value : action.payload
        };
        default:
            return state;
    }
};
export default reducer;