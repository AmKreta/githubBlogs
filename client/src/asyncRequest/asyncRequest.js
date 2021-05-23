import axios from 'axios';
import { updateTokens } from '../actions/actions';
import store from '../store/store';

//this function simplifies token updating and handling

//function automatically updates token if received in response and return rest of data as response data
//if {sucess:false} or error happens , promise rejects


const asyncRequest = ({ method, url, body, headers }) => {
    let { accessToken, refreshToken } = store.getState().token;
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios({
                url: url,
                method: method,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    ...headers
                },
                data: {
                    refreshToken,
                    ...body
                }
            });
            if (res.data.sucess) {
                let { tokens, ...response } = res.data.payload;
                //if token are sent update in store
                if (tokens) {
                    store.dispatch(updateTokens(tokens));
                }
                //sending rest of data as response
                resolve(response);
            }
            else {
                reject(res.data);
            }
        }
        catch (err) {
            reject(err);
        }
    });
}

export default asyncRequest;