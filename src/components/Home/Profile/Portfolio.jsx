import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import css from './Portfolio.module.css'
import Preloader from '../../Common/Preloader/Preloader'
import ProfileStatus from './Status/ProfileStatus'

const Portfolio = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return(
        <div className='container-fluid'>
            <div className='row align-item-center'>
                <div className='col'>
                    <div className={css.img}>
                        <img src={props.profile.photos.large}/>
                    </div>
                    <div className={css.fullName}>{props.profile.fullName}</div>
                    <ProfileStatus status='Test'/>
                    <div>About me:</div>
                    <div>
                        <ul>
                            <li>{props.profile.aboutMe}</li>
                            <li>{props.profile.lookingForAJob ===  true? 'In job search' : 'I Work'}</li>
                            <li>{props.profile.lookingForAJobDescription}</li>
                            <li>{props.profile.fullName}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Portfolio