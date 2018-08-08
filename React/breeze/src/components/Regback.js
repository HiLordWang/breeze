import React, { Component } from 'react';
import {connect} from 'react-redux'
class Reg extends Component {
    constructor(){
        super()
        this.state={
            phone:'',
            pass:'',
            nickname:'',
        }
        this.change=this.change.bind(this)
        this.register=this.register.bind(this)
    }
    change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    register() {
        let params=new URLSearchParams();
        params.append('user',this.state.nickname);
        params.append('pass',this.state.pass);
        params.append('phone',this.state.phone);
        fetch(
            'http://localhost:3000/reg',
            {
                credentials: 'include',
                method: 'POST',
                headers:{
                    'Accept':'application/json,text/plain,*/*',
                    'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
                },
                body:params
            }
        ).then(res =>res.text()
        ).then((data) => {
            switch (data){
                case '注册成功':
                    this.props.history.push('/login')
                    break;
                case '错误的用户名密码':
                    alert('错误的用户名密码');
                    break;
                case 'login error database':
                    alert('login error database');
                    break;
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

  render() {
    return (
        <div className="content">
            <div className="register-box">
                <div className="form-box">
                    <div className="row row-input clearfix">
                        <div className="row-l fl"><i className="iconfont">&#xe64f;</i></div>
                        <div className="row-r">
                            <input className="input_box" placeholder="输入手机号/邮箱/昵称" value={this.state.phone} name='phone' onChange={this.change}/>
                        </div>
                    </div>
                    <div className="row row-input clearfix">
                        <div className="row-l fl"><i className="iconfont">&#xe692;</i></div>
                        <div className="row-r">
                            <input className="input_box" placeholder="输入密码" value={this.state.pass} name='pass' onChange={this.change}/>
                        </div>
                    </div>
                    <div className="row row-input clearfix">
                        <div className="row-l fl"><i className="iconfont">&#xe608;</i></div>
                        <div className="row-r">
                            <input className="input_box" placeholder="输入昵称" value={this.state.nickname} name='nickname' onChange={this.change}/>
                        </div>
                    </div>
                    <div className="row row-input clearfix">
                        <div className="row-l fl"><i className="iconfont">&#xe6a8;</i></div>
                        <div className="row-r">
                            <span>性别</span>
                            <label><input className="btn-radio" type="radio" name="radio1"  />男</label>
                            <label><input className="btn-radio" type="radio" name="radio1" />女</label>
                        </div>
                    </div>
                    <div className="row row-input clearfix">
                        <div className="row-l fl"><i className="iconfont">&#xe60f;</i></div>
                        <div className="row-r">
                            <span>支付方式</span>
                            <label style={{color:'#24a82e'}}><input className="btn-radio" type="radio" name="radio2"
                                                                   />微信</label>
                            <label style={{color:'#2d95de'}}><input className="btn-radio" type="radio"
                                                                  name="radio2" />银行卡</label>
                        </div>
                    </div>
                    <div className="row row-txt">
                        <p><input className="checkbox" type="checkbox" name="checkbox" />已阅读并同意<a
                            href="user_xieyi.html">《微风向用户协议》</a></p>
                    </div>
                    <div className="row row-btn">
                        <a className="green-btn" onClick={this.register}>确定</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default Reg