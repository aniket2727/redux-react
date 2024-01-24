


import { SET_EMAIL } from "./actions";

const initialState={
    email:'',
};


const emailReducers=(state=initialState,action)=>{
    switch(action.type){
        case SET_EMAIL:return{
            ...state,
            email:action.payload
        };
        default:
            return state;
    }

}



export default emailReducers