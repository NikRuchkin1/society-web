import React from 'react'
import css from './Dialogs.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, Redirect } from 'react-router-dom'

let Message = (props) =>{
    return(
        <div className={css.word}>{props.message}</div>
    )
}

const DialogsProps = (props) =>{
let path = '/message/' + props.id;

    return (
        <div className={css.betatest}>
            <NavLink className={css.names} to={path}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = (props) => {

    if (props.isAuth === false) return <Redirect to='/Login'/>

    let array = props.names.map(dialog=> <DialogsProps
                                            id={dialog.id}
                                            name={dialog.name}>
                                         </DialogsProps>)
    let arrayMessage = props.mass.map(idea => <Message 
                                                className={css.word}
                                                message={idea.message}>
                                              </Message>)

    let refMessage = React.createRef();
    let newMessage = () => {
        props.newMessages()
    }

    let onChangedMessage = () => {
        let textMessage = refMessage.current.value;
        props.onChangedMessages(textMessage)
    }

    return (
        <div className={css.main}>
            <div className='conteiner-fluid'>
                <div className='row'>

                    <div className='col-4'>
                        <div className={css.name}>
                            <div className={css.people}>
                                {array}
                            </div>
                        </div>
                    </div>

                    <div className='col-8'>
                        <div className={css.dialog}>
                            {arrayMessage}
                        </div>
                        <div className={css.sendMessage}>
                            <div className={css.input}>
                                <input
                                ref={refMessage}
                                onChange={onChangedMessage}
                                value={props.messageText}>

                                </input>
                            </div>
                            <div className={css.sent}>
                                <button onClick={newMessage}>
                                    Sent
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;