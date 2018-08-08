import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import nav1 from '../assect/images/nav1.png'
import nav2 from '../assect/images/nav2.png'
import nav3 from '../assect/images/nav3.png'
import nav4 from '../assect/images/nav4.png'
class Footer extends Component {
  render() {
    return (
        <footer id="footer" className="foot">
            <ul>
                <li className="active">
                    <Link to='/home'>
                        <span className="img"><img src={nav1} /></span>
                        <p>首页</p>
                    </Link>
                </li>
                <li>
                    <Link to='/tiediy'>
                        <span className="img"><img src={nav2} /></span>
                        <p>贴DI</p>
                    </Link>
                </li>
                <li>
                    <Link to='/shopcar'>
                        <span className="img"><img src={nav3} /></span>
                        <p>收藏</p>
                    </Link>
                </li>
                <li>
                    <Link to='/user'>
                        <span className="img"><img src={nav4} /></span>
                        <p>我的</p>
                    </Link>
                </li>
            </ul>
        </footer>
    );
  }
}


export default Footer