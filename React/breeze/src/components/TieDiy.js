import React, { Component } from 'react';
import {connect} from "react-redux";
import NvaBar from './NavBar'
import {Link} from 'react-router-dom'
import Fetch from '../common/FetchRequest'
class TieDiy extends Component {
    constructor(props){
        super()
        props.get()
    }
  render() {
        let {listData,add}=this.props
    return (
        <div className="content">
            <NvaBar />
            <div className="column imgtxt-list">
                <div className="con-list">
                    <ul className="clearfix">
                        {
                            listData.map((item,index)=>(
                                <li key={index}>
                                    <div className="li-box clearfix">
                                        <a href="javascript:;" className="img fl"><img src={item.src} /></a>
                                        <div className="txt-box">
                                            <p><Link className="txt" to={{
                                                pathname:'/detail/'+item.id,
                                                search:''
                                            }}>
                                                {item.title}</Link></p>
                                            <div className="info clearfix">
                                                <span className="zan"><i className="iconfont">&#xe600;</i>点赞</span>
                                                <span className="collect" onClick={add.bind(null,item)}><i className="iconfont">&#xe605;</i>收藏</span>
                                                <span className="author"><img src="./images/user_mini.png" />sfjj</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="Edit">
                        <a href="tie_edit.html" className="edit-btn"><i className="iconfont">&#xe62e;</i>我要贴</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return {...state}
};
const mapDispatchToProps=(dispatch)=>{
    return {
        get:()=>{
            let options={
                dispatch,
                url:'http://localhost:3000/list',
                params:'',
                history:'',
                methoder:'GET',
                type:'LIST',
                result:''
            }

            Fetch(options)

        },
        add:(action)=>{
            dispatch({type:'ADD_CAR',payload:{...action,num:1}})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TieDiy)