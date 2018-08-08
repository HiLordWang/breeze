import React, { Component } from 'react';
import NvaBar from './NavBar'
class Detail extends Component {
  render() {
     let {user}=this.props
    return (
        <div className="content con-detail">
            <NvaBar />
            <div className="detail_box">
                <div className="con">
                    <p className="title">手机能拍出什么样的照片？</p>
                    <p className="pic"><img src="/images/diy_detail.jpg" /><i className="icon"><img src="/images/code.png" /></i>
                    </p>
                </div>
                <div className="info clearfix">
                    <span className="author"><img src="/images/user_mini.png" />文娟</span>
                    <span className="zan"><i className="iconfont">&#xe600;</i>298人点赞</span>
                    <span className="collect"><i className="iconfont">&#xe605;</i>收藏</span>
                </div>
            </div>
              <div className="user_card clearfix">
                  <i className="icon icon-left"></i>
                  <i className="icon icon-right"></i>
                  <div className="item pic">
                      <div className="userimg"><img src="/images/user.png" /></div>
                      <div className="username">文娟~爱正顺久</div>
                  </div>
                  <div className="item info">
                      <div className="tel">电话：1384568899</div>
                      <div className="signature">个性签名：</div>
                      <p className="signature_txt">生活不仅有面包，还有诗和远方</p>
                  </div>
                  <div className="item code">
                      <div className="codeimg"><img src="/images/code.png" /></div>
                  </div>
              </div>
        </div>
    )
  }
}

export default Detail
