
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
        case types.REMOVE_ALL:
            return Object.assign({},state,{car:payload});
        case types.ADD_CAR:
            let find=false;
            state.car.forEach((item,index)=>{
                if(item.id===payload.id){
                    find=true;
                    item.num++;
                }
            });
            if(!find){
                state.car.push(payload);
            }
            return Object.assign({},state,{car:[...state.car]});
        case types.MINUS:
            state.car.forEach((item,index)=>{
                if(item.id===payload.id){
                    item.num==1?item.num=1:item.num--;
                }
            });
            return Object.assign({},state,{car:[...state.car]});
        case types.PLUS:
            state.car.forEach((item,index)=>{
                if(item.id===payload.id){
                    item.num++;
                }
            });
            return Object.assign({},state,{car:[...state.car]});
        default:
            return state
    }

}
export default reducer