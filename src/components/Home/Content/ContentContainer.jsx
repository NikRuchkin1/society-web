import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer'
import Content from './Content'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        posts: state.mainPage.posts,
        surname: state.mainPage.surname,
        onPostText: state.mainPage.testingFlux.newPostText,
        img2: state.img2,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Shared: () => {
            dispatch(addPostActionCreator())},

        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)},
    }
}

let ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;