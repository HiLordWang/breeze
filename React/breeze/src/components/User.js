import React, { Component } from 'react';
import {connect} from 'react-redux'
class User extends Component {
  render() {
      let {user,loginout}=this.props;
    return (
        <div className="content u-index">
            <div className="userbox">
                <div className="userbox-1">
                    <div className="userimg"><img src="./images/user.png" /></div>
                    <div className="username">{user.data.user}</div>
                </div>
                <div className="userbox-2">
                    <ul className="clearfix">
                        <li><a href="user_tixian.html" className="c000"><span>¥1688</span><br  />钱包余额</a></li>
                        <li><span>¥0.00</span><br/>已提现余额</li>
                    </ul>
                </div>
            </div>
            <div className="ul-list">
                <ul>
                    <li className="tel">
                        <i className="iconfont">&#xe68e;</i>{user.data.phone}
                        <span className="fr">显示在微名片<input type="checkbox" className="switch" /></span>
                    </li>
                    <li>
                        <a href="user_info.html" className="arrow-right">
                            <i className="iconfont">&#xe660;</i>个人信息
                        </a>
                    </li>
                    <li>
                        <a href="user_team.html" className="arrow-right">
                            <i className="iconfont">&#xe625;</i>我的团队
                        </a>
                    </li>
                    <li>
                        <a href="user_collect.html" className="arrow-right">
                            <i className="iconfont">&#xe73a;</i>我的收藏
                        </a>
                    </li>
                    <li>
                        <a href="user_code.html" className="arrow-right">
                            <i className="iconfont">&#xe604;</i>一键生成二维码
                        </a>
                    </li>
                </ul>


            </div>

            <div className="ul-list">
                <ul>
                    <li>
                        <a href="javascript:;" onClick={loginout.bind(null,this.props.history)} style={{textAlign:'center',color:'#999'}} >退 出
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}


const mapStateToProps=(state)=>{
    return {...state}
}

const mapDispatchToProps=dispatch=>({
loginout:(history)=>{
    dispatch({type:'LOGIN_OUT',payload:{auth:false,data:{}}});
    history.push('/')
}

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
