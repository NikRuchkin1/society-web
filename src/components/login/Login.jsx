import React from 'react'
import {reduxForm, Field} from 'redux-form'

const LoginForm =  (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field component={"input"} name={"checkbox"} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const Login =  (props) => {
    const onSubmit = (formData)=> {
    }
    return (
        <div>
            <div>Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login'}) (LoginForm)


export default Login