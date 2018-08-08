import React, { Component } from 'react';

class NavBar extends Component {
  render() {
     let {user}=this.props
    return (
            <div className="top-nav">
                <ul className="clearfix">
                    <li><span><i className="iconfont">&#xe61d;</i>全部分类</span></li>
                    <li><span><i className="iconfont">&#xe601;</i>点赞排序</span></li>
                    <li><span><i className="iconfont">&#xe616;</i>我DIY的</span></li>
                </ul>
            </div>
    )
  }
}

export default NavBar
