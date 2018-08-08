import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Fetch from '../common/FetchRequest'
class Login extends Component {
    constructor(){
        super()
        this.state={
            user:'',
            pass:'',
        }
        this.change=this.change.bind(this)
    }
    change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
      let {login,user,history}=this.props;
    return (
        <div className="content">
            <div className="login-box">
                <div className="form-box">
                    <div className="row row-input clearfix">
                        <div className="row-l fl"><i className="iconfont">&#xe608;</i></div>
                        <div className="row-r">
                            <input className="input_box" placeholder="输入手机号/邮箱/昵称" value={this.state.user} name='user' onChange={this.change} />
                        </div>
                    </div>
                    <div className="row row-input clearfix">
                        <div className="row-l fl"><i className="iconfont">&#xe692;</i></div>
                        <div className="row-r">
                            <input className="input_box" placeholder="输入密码" value={this.state.pass} name='pass' onChange={this.change}/>
                        </div>
                    </div>
                    <div className="h20"></div>
                    <div className="row row-btn">
                        <a href="javascript:;" className="green-btn" onClick={login.bind(null,{user:this.state.user,pass:this.state.pass,history:history})}>登录</a>
                    </div>
                    <div className="row row-btn">
                        <Link className="boder-btn" to='/reg'>加入会员</Link>
                    </div>
                    <div className="row row-txt">
                        <a href="user_mima.html" className="forget">忘记密码</a>
                    </div>
                </div>
                <div className="h20"></div>
                <div className="otherway">
                    <div className="title"><span>其他登录方式</span></div>
                    <ul className="clearfix">
                        <li>
                            <a href="#" className="weibo"><i className="iconfont">&#xe60a;</i></a>
                        </li>
                        <li>
                            <a href="#" className="qq"><i className="iconfont">&#xe607;</i></a>
                        </li>
                        <li>
                            <a href="#" className="weixin"><i className="iconfont">&#xe606;</i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{

    return {...state}
}

const mapDispatchToProps=dispatch=>({
    login:({user,pass,history})=>{
        let params=new URLSearchParams();
        params.append('user',user);
        params.append('pass',pass);
        let options={
            dispatch,
            url:'http://localhost:3000/login',
            params,
            history,
            methoder:'POST',
            type:'LOGIN',
            result:'login'
        }
        Fetch(options)
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
