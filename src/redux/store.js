import img1 from './../components/Home/Profile/horizont.jpg'
import img2 from './../components/Home/Profile/Nik.jpg'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
    _state: {
    
      dialogPage:{
            messages: {
              mess: '',
            },
            names: [
              {id: 1, name: 'Nikita'},
              {id: 2, name: 'Sasha'},
              {id: 3, name: 'Alina'},
              {id: 4, name: 'Andrey'},
              {id: 5, name: 'Artem'},
              {id: 6, name: 'Nikolay'},
            ],
            mass:[
              {id: 1, message: 'Hi'},
              {id: 2, message: 'How are you?'},
              {id: 3, message: 'ok'},
            ],
      },

      mainPage:{
            surname :[
              {name:'Nikita', second:'Ruchkin'},
            ],
            testingFlux:{
              newPostText:'',
            },
            posts: [
              {id:1, text:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'},
              {id:2, text:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'},
            ],
      },
  },

  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.mainPage = profileReducer(this._state.mainPage, action)
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

    this._callSubscriber(this._state);
  },

}

  window.store = store;


export default store;

store={props.state}
dispatch={props.dispatch}
img1={props.img1} 
img2={props.img2}

{/*dispatch={props.dispatch}
store={props.state}*/}


{/*store={props.store.mainPage} 
                                img1={props.img1} 
img2={props.img2}*/}

{/*store={props.store} 
                                dispatch={props.dispatch} 
img2={props.img2}*/}