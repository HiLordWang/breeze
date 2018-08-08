import React, { Component } from 'react';
import {connect} from 'react-redux'
import Fetch from '../common/FetchRequest'
class Reg extends Component {
    constructor(){
        super()
        this.state={
            phone:'',
            pass:'',
            nickname:'',
        }
        this.change=this.change.bind(this)
    }
    change(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  render() {
        let {register,history}=this.props
    console.log(this.props)
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
                        <a className="green-btn" onClick={register.bind(null,{nickname:this.state.nickname,pass:this.state.pass,phone:this.state.phone,history})}>确定</a>
                    </div>
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
    register:({nickname,pass,phone,history})=>{
        let params=new URLSearchParams();
        params.append('user',nickname);
        params.append('pass',pass);
        params.append('phone',phone);
        let options={
            dispatch,
            url:'http://localhost:3000/reg',
            params,
            history,
            methoder:'POST',
            type:'',
            result:'reg'
        }
        Fetch(options)

    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reg);