import React, { Component } from 'react';
import {connect} from 'react-redux'

import HomeTitle from './HomeTitle'
import HomeColumn from './HomeColumn'

class Home extends Component {
    constructor(props){
        super();

        props.get()
    }




  render() {
     let {homeData}=this.props
    return (
        <React.Fragment>
            <HomeTitle {...this.props}></HomeTitle>
            <HomeColumn homeData={homeData}></HomeColumn>
        </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
    return {...state}
};
const mapDispatchToProps=(dispatch)=>{
    return {
        get:()=>{
            fetch(
                'http://localhost:3000/home'
            ).then(res=>{
                return res.json()
                }
            ).then(data=>{
                dispatch({type:'GET_LIST',payload:data})
            })
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home)