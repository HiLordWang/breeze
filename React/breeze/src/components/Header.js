import React, { Component } from 'react';
import {connect} from 'react-redux'
class Header extends Component {

  render() {
    return (
        <header id="header">
            <a onClick={()=>{this.props.history.go(-1)}} className="iconfont fl">&#xe63f;</a>
            <div className="title">{this.props.title}</div>
            <a href="#" className="iconfont fr">&#xe6a0;</a>
        </header>
    );
  }
}

export default Header
// export default connect(mapStateToProps,mapDispatchToProps)(Header)