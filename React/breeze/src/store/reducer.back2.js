
import * as types from './types'

const reducer=(state,{type,payload})=>{
    if(type==types.ADD_CAR){
        let myarr=[]
        let arr= [];
        for(var i=0;i<state.car.length;i++){
            arr.push({...state.car[i]})
        }
        arr.push(payload)
        myarr=[arr[0]];
        for(var i=1;i<arr.length;i++){
            var bl = false;
            for(var j=0;j<myarr.length;j++){
                if(arr[i].id==myarr[j].id){
                    bl = true;
                    myarr[j].num++;
                    break;
                }
            }
            if (!bl) {
                myarr.push(arr[i]);
            }
        }
        return Object.assign({},state,{car:myarr});
    }

    if(type==types.PLUS){
        let arr= [];
        for(var i=0;i<state.car.length;i++){
            arr.push({...state.car[i]})
        }
        for(var item of arr){
            item.id==payload.id?item.num++:null
        }

        return Object.assign({},state,{car:arr});
    }

    if(type==types.MINUS){
        let arr= [];
        for(var i=0;i<state.car.length;i++){
            arr.push({...state.car[i]})
        }
        for(var item of arr){
            item.id==payload.id?item.num--:null
        }

        return Object.assign({},state,{car:arr});
    }


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
        default:
            return state
    }

}
export default reducer