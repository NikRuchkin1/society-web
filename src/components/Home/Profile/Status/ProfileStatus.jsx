import React from 'react'
import css from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: true,
    }

    activateMode () {
        this.setState({
            editMode: false
        })
        this.state.editMode = false;
    }

    deactivateMode () {
        this.setState({
            editMode: true
        })
        this.state.editMode = true;
    }

    componentDidUpdate() {

    }
    render(){
    return (
        <div>
                {!this.state.editMode?
                    <div>
                        <form>
                            <input autoFocus={true} onBlur={this.deactivateMode.bind(this)} value={this.props.status}/>
                        </form>
                    </div>
                :
                <div>
                    <span onClick ={this.activateMode.bind(this)}>
                        {this.props.status}
                    </span>
                </div>
            }
        </div>
    )}
}

export default ProfileStatus;