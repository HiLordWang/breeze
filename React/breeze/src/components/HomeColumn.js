import React, { Component } from 'react';

class HomeColumn extends Component {
  render() {
    return (
    <React.Fragment>
      {
          this.props.homeData.map((item,index)=>(
              <div className={"column card-list column-"+item.id} key={index}>
                  <div className="title">
                      <span className="titletext fl"><i className="iconfont" dangerouslySetInnerHTML={{__html:item.title.icon1}}></i>{item.name}</span>
                      <a href="mei_list.html" className="more fr">更多<i className="iconfont" dangerouslySetInnerHTML={{__html:item.title.icon2}}></i></a>
                  </div>
                  <div className="con-list">
                      <ul className="clearfix">
                          <li>
                              <div className="photo-card">
                                  <a href="tiediy_detail.html" className="img"><img src={item.count.p1.src1} /></a>
                                  <p className="txt"><a href="tiediy_detail.html">霍比屯的日常</a></p>
                                  <div className="info clearfix">
                                      <span className="author"><img src={item.count.p1.src2}  />sfjjkjh</span>
                                      <span className="zan"><i className="iconfont" dangerouslySetInnerHTML={{__html:item.count.p1.icon1}}></i>298</span>
                                      <span className="collect"><i className="iconfont" dangerouslySetInnerHTML={{__html:item.count.p1.icon2}}></i>123</span>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className="photo-card">
                                  <a href="tiediy_detail.html" className="img"><img src={item.count.p2.src1}  /></a>
                                  <p className="txt"><a href="tiediy_detail.html">霍比屯的日常</a></p>
                                  <div className="info clearfix">
                                      <span className="author"><img src={item.count.p2.src2}  />sfjjkjh</span>
                                      <span className="zan"><i className="iconfont" dangerouslySetInnerHTML={{__html:item.count.p2.icon1}}></i>298</span>
                                      <span className="collect"><i className="iconfont" dangerouslySetInnerHTML={{__html:item.count.p2.icon2}}></i>56</span>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          ))
      }
    </React.Fragment>
    );
  }
}

export default HomeColumn
