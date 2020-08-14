import { userAPI } from "../components/Api/Api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE  ='SET_USER_PROFILE';
const initialState = {
  surname :[ {name:'Nikita', second:'Ruchkin'} ],
  testingFlux:{ newPostText:'' },
  posts: [],
  profile: null,
}
const profileReducer = (state = initialState, action) => {

    switch(action.type) {

      case UPDATE_NEW_POST_TEXT: {
        return {
          ...state,
          testingFlux: {...state.testingFlux, newPostText: action.newText }
        }}

        case ADD_POST:
          let body = state.testingFlux.newPostText
            return {
              ...state,
              posts: [...state.posts, {id:4,  text: body}],
              testingFlux: {newPostText: ''}
            }

          case SET_USER_PROFILE: {
            return {
              ...state, profile: action.profile
            }}

        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
  userAPI.getUserId(userId).then(response => {
    dispatch(setUserProfile(response.data))
});
}

export default profileReducer;