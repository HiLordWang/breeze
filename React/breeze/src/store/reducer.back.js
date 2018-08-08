
import * as types from './types'

const reducer=(state,{type,payload})=>{

    switch (type){
        case types.LOGIN_OUT:
            return Object.assign({},state,{user:payload});
        case types.LOGIN:
            return Object.assign({},state,{user:payload});
        case types.LOADING_VIEW:
            return Object.assign({},state,{bLoading:payload});
        case types.GET_LIST:
            return Object.assign({},state,{homeData:payload});
        case types.LIST:
            return Object.assign({},state,{listData:payload});
        case types.ADD_CAR:
             return Object.assign({},state,{car:state.car.concat(payload)});
        case types.MINUS:
            return Object.assign({},state,{car:payload});
        case types.PLUS:
            return Object.assign({},state,{car:state.car.concat(payload)});
        default:
            return state
    }

}
export default reducer