import * as type from './type'
export default {
  [type.VIEW_NAV](state,payload){
    state.bNav=payload;
  },
  [type.VIEW_FT](state,payload){
    state.bFt=payload;
  },
  [type.VIEW_LOAD](state,payload){
    state.bLoad=payload;
  },
  [type.REG_BT](state,payload){
    state.bReg=payload;
  },
  [type.LOG_BT](state,payload){
    state.bLog=payload;
  },
  [type.LOG_IN](state,payload){
    state.bLin=payload;
  },
  [type.LOG_OUT](state,payload){
    state.bLout=payload;
  },
}