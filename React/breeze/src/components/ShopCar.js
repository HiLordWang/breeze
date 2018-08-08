import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../assect/css/shoppingcart.css'
class ShopCar extends Component {
    change(){

    }
    render() {
        let {car,minus,plus,removeAll}=this.props;
    return (
        <React.Fragment>
            <div className="cartform">
                <form>
                    {
                        car[0]?car.map((item,index)=>(
                            <div className="house" key={index}>
                                <div className="listbox">
                                <span className="Orgoods">
                                <a href="#"><img src={item.src} /></a>
                                <span className="message">
                                    <a href="#">{item.title}</a>
                                    <span className="price">
                                        <span><a className="minus" onClick={minus.bind(null,item)}>-</a><a className="plus" onClick={plus.bind(null,item)}>+</a><input type="text"  value={item.num} onChange={this.change.bind(this)}/></span>
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
                <b onClick={removeAll}>删除</b>
                <span>
    		<p>合计:{car.length}<br/><i></i></p>
		  </span>
                <a className="jies btn_color" href="#">去结算</a>
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
            dispatch({type:'MINUS',payload:{...action}})
        },
        plus:(action)=>{
            dispatch({type:'PLUS',payload:{...action}})
        },
        removeAll:()=>{
            dispatch({type:'REMOVE_ALL',payload:[]})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ShopCar)