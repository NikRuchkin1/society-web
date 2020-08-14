import 'bootstrap/dist/css/bootstrap.min.css'
import {TypeMessagesOnChanged, TypeMessagesOnClick} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


let  mapStateToProps = (props) => {
    return {
        names: props.dialogPage.names,
        messageText: props.dialogPage.messages.mess,
        mass:props.dialogPage.mass,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangedMessages: (textMessage) => {
            dispatch(TypeMessagesOnChanged(textMessage))},

        newMessages: () => {
            dispatch(TypeMessagesOnClick())},
    }
}


compose(
    withAuthRedirect,connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);