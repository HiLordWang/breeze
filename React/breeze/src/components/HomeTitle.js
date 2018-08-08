import React, { Component } from 'react';

class HomeTitle extends Component {
  render() {
     let {user}=this.props
    return (
          <div className="user_card clearfix">
              <div className="item pic">
                  <div className="userimg"><img src="./images/user.png" /></div>
                  <div className="username">{user.data.user}</div>
              </div>
              <div className="item info">
                  <div className="tel">电话：{user.data.phone}</div>
                  <div className="signature">个性签名：</div>
                  <p className="signature_txt">生活不仅有面包，还有诗和远方</p>
              </div>
              <div className="item code">
                  <div className="codeimg"><img src="./images/code.png" /></div>
              </div>
          </div>
    );
  }
}

export default HomeTitle;
