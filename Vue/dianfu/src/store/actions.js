import {
    VIEW_NAV,VIEW_FT,VIEW_LOAD,REG_BT,LOG_BT,LOG_IN,LOG_OUT
} from './type';
export default {
    [VIEW_NAV]:({commit,state},payload)=>{
        commit(VIEW_NAV,payload)
    },
    [VIEW_FT]:({commit,state},payload)=>{
    commit(VIEW_FT,payload)
    },
    [VIEW_LOAD]:({commit,state},payload)=>{
        commit(VIEW_LOAD,payload)
    },
    [REG_BT]:({commit,state},payload)=>{
        commit(REG_BT,payload)
    },
    [LOG_BT]:({commit,state},payload)=>{
        commit(LOG_BT,payload)
    },
    [LOG_IN]:({commit,state},payload)=>{
        commit(LOG_IN,payload)
    },
    [LOG_OUT]:({commit,state},payload)=>{
        commit(LOG_OUT,payload)
    },
}