import axios from 'axios';
import {TRANSLINK_API, PROXY_URL} from '../shared/api';
import {TRANSLINK_API_KEY} from '../shared/constants';

export const SET_BUS_LOCATIONS = "transit:setBusLocations"; 

export function setBusLocations(){
    return async (dispatch)=>{
        try{
            /**
             * Since the Translink API doesn't provide CORS support we have to go around it and consume our own API 
             * Please see for more details: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
             */
            
            var transLinkAPI = TRANSLINK_API(TRANSLINK_API_KEY);

            var response = await axios.get(PROXY_URL(transLinkAPI));
            var payload = {buses: response.data, updated:response.headers.date};
            dispatch({type: SET_BUS_LOCATIONS, payload});
        }catch(e){

        }
    }
}