const newMessage = 'New-Message'
const changedTextMessage = 'Changed-Text-Message'

const initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {

  let stateCopy;

  switch(action.type) {

    case changedTextMessage:
      return {
        ...state,
        messages: {...state.messages, mess: action.textMessage }
      }

    case newMessage:
      let body = state.messages.mess
      return {
        ...state,
        mass: [...state.mass, {id:4, message: body}],
        messages: {mess: ''},
      }

    default:
      return state;
  }
}

export const TypeMessagesOnClick = () => {
  return {type:'New-Message'}
}

export const TypeMessagesOnChanged = (info) => {
  return {type:'Changed-Text-Message', textMessage: info}
}

export  default dialogsReducer;