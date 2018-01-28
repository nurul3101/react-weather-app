import { FETCH_WEATHER } from '../actions/index'

export default function(state=[] , action){

    switch(action.type){

        case FETCH_WEATHER:
            return [action.payload.data , ...state];
    }
    //console.log("Action",action);
    // ES6 Syntax which means append we want to append the new payload in front of existing state
    //It will return a new instance of state and not mutate the state like state.push();
    return state;
}  