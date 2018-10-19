import { SET_BUS_LOCATIONS } from '../actions/transit-actions';

const defaultState = {
    buses:[],
    updated:''
}
export default function transitInfo(state=defaultState, action){
    const { type, payload } = action;
    switch(type){
        case SET_BUS_LOCATIONS:
            return {
                updated:payload.updated,
                buses: payload.buses
            }
        //actions will go here
        default:
            return state;
    }
}