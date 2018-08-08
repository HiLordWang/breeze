import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../assect/css/shoppingcart.css'
class ShopCar extends Component {
    change(){

    }


    render() {
        var sum=0
        let {plus,minus,car}=this.props;
        let myarr=[]
          let arr= [];
          for(var i=0;i<car.length;i++){
              arr.push({...car[i]})
          }

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
        if(myarr[0]){
            for(var item of myarr){
                sum+=item.num
            }
        }else {
            sum=0
        }



    return (
        <React.Fragment>
            <div className="cartform">
                <form>
                    {
                       myarr[0]?myarr.map((item,index)=>(
                            <div className="house" key={index}>
                                <div className="listbox">
                                <span className="Orgoods">
                                <a href="#"><img src={item.src} /></a>
                                <span className="message">
                                    <a href="#">{item.title}</a>
                                    <span className="price">
                                        <span><a className="minus" onClick={minus.bind(null,myarr,index)}>-</a><a className="plus" onClick={plus.bind(null,item)}>+</a><input type="text"  value={item.num} onChange={this.change.bind(this)}/></span>
                                    </span>
                                </span>
                                </span>
                                </div>
                            </div>
                        )):null
                    }
                </form>
            </div>
            <div className="Calculate">
                <input className="all" type="checkbox"/>
                <b>全选</b>
                <b>删除</b>
                <span>
    		<p>合计:{sum}<br/><i></i></p>
		  </span>
                <a className="jies btn_color" href="#">去结算</a>
                <p className="edit_btn">
                    <span><a className="linebtn gray" href="#">分享</a><a className="linebtn gray" href="#">删除</a></span>
                </p>
            </div>
        </React.Fragment>
    );
  }
}


const mapStateToProps=(state)=>{
    return {...state}
};
const mapDispatchToProps=(dispatch)=>{
    return {
        minus:(action,index)=>{
            action[index].num--
            dispatch({type:'MINUS',payload:action})
        },
        plus:(action)=>{
            dispatch({type:'PLUS',payload:{...action,num:1}})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ShopCar)