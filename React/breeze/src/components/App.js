import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import Loadable from 'react-loadable'


import Home from './Home'

const Login = Loadable({
    loader: () => import('./Login'),
    loading:()=>null
});
const User = Loadable({
    loader: () => import('./User'),
    loading:()=>null
});
const Reg = Loadable({
    loader: () => import('./Reg'),
    loading:()=>null
});
const TieDiy = Loadable({
    loader: () => import('./TieDiy'),
    loading:()=>null
});
const Detail = Loadable({
    loader: () => import('./Detail'),
    loading:()=>null
});
const ShopCar = Loadable({
    loader: () => import('./ShopCar'),
    loading:()=>null
});

// import Login from './Login'
// import User from './User'
// import Reg from './Reg'
// import Detail from "./Detail";
// import ShopCar from './ShopCar'
// import TieDiy from './TieDiy'

import AuthRoute from '../guard/AuthRoute'
import Header from './Header'
import Footer from './Footer'
import Loading from './Loading'
import {connect} from "react-redux";






class App extends Component {
    constructor(){
        super();
        this.state={
            title:''
        }

    }


    // componentDidMount(){

    //    import('./Footer').then((res)=>{
    //        let {default:component}=res
    //        console.log(component)

    //    })


    



        
    // }



  render() {
       
      // switch (this.props.location.pathname){
      //     case '/home':
      //         setTimeout(()=>{
      //             this.setState({
      //                 title:'微风向首页'
      //             });
      //         },0)
      //         break;
      //     case '/tiediy':
      //         setTimeout(()=>{
      //             this.setState({
      //                 title:'贴DIY'
      //             });
      //         },0)
      //         break;
      //     case '/shopcar':
      //         setTimeout(()=>{
      //             this.setState({
      //                 title:'收藏'
      //             });
      //         },0)
      //         break;
      //     case '/login':
      //         setTimeout(()=>{
      //             this.setState({
      //                 title:'登录'
      //             });
      //         },0)
      //         break;
      //     case '/reg':
      //         setTimeout(()=>{
      //             this.setState({
      //                 title:'注册'
      //             });
      //         },0)
      //         break;
      //     case '/user':
      //         setTimeout(()=>{
      //             this.setState({
      //                 title:'会员中心'
      //             });
      //         },0)
      //         break;
      //     case '/detail':
      //         setTimeout(()=>{
      //             this.setState({
      //                 title:'贴DIY详情'
      //             });
      //         },0)
      //         break;
      // }

      switch (this.props.location.pathname){

          case '/home':
              this.state.title='微风向首页';
              break;
          case '/tiediy':
              this.state.title='贴DIY';
              break;
          case '/shopcar':
              this.state.title='收藏';
              break;
          case '/login':
              this.state.title='登录';
              break;
          case '/reg':
              this.state.title='注册';
              break;
          case '/user':
              this.state.title='会员中心';
              break;
          case '/detail':
              this.state.title='贴DIY详情';
              break;
      }
      let {bLoading}=this.props
    return (
        <div className='App'>
            <Header {...this.props} title={this.state.title}/>
            {bLoading?<Loading />:null}
          <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/shopcar' component={ShopCar}/>
              <Route path='/reg' component={Reg}/>
              <Route path='/login' component={Login}/>
              <AuthRoute path='/user' component={User}/>
              <Redirect exact from='/' to='/home' />
              <Route path="/detail/:aid" component={Detail}/>
              <Route path='/tiediy' component={TieDiy}/>
          </Switch>
            <Footer/>
        </div>
    );
  }
}



const mapStateToProps=(state,ownProps)=>{
    return {...state}
}

const mapDispatchToProps=dispatch=>({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
