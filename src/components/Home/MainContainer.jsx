import React from 'react'
import Main from './Main'
import { connect } from 'react-redux'
import {getUserProfile} from '../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom'

class MainContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }
    render() {
        return(
           <Main {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = (props) => {
    if (props.isAuth == false) return <Redirect to='/Login'/>
    return <MainContainer {...props}/>
}

const mapDispatchToProps = (state) => ({
    profile: state.mainPage.profile
})

const WithUrlDataMainContainer =  withRouter(AuthRedirectComponent);

export default connect(mapDispatchToProps, {getUserProfile}) (WithUrlDataMainContainer);