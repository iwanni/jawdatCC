import authReducer from './authReducer'
import dataReducer from './dataReducer'
import { combineReducers } from 'redux'

// const initState = { datas: [] };

// const rootReducer = (state = initState, action) => {
//     if (action.type === "GET_DATAS") {
//         //console.log(action.posts.data.posts);
//         return {
//             ...state,
//             datas: action.datas.data.datas.slice(0, 10)
//         };
//     }
//     return state;
// };

const rootReducer = combineReducers({
    auth: authReducer,
    data: dataReducer
})

export default rootReducer;
