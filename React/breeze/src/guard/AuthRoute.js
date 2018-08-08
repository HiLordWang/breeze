import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom'
import {connect} from "react-redux";

class AuthRoute extends Component{
    render(){

        let {component:Component ,...rest}=this.props;
        return <Route
            {...rest}
            render={(props)=>(
                rest.user.auth? <Component {...props}/>:<Redirect to='/login' />
            )}
        />
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
)(AuthRoute);