import React from 'react'
import css from './Main.module.css'
import ContentContainer from './Content/ContentContainer'
import Portfolio from './Profile/Portfolio'

const Mains = (props) => {

    return (
        <div className={css.main}>
            <div className='conteiner-fluid'>
                <div className='row'>

                    <div className='col-4'>
                        <Portfolio profile={props.profile}/>
                    </div>

                    <div className='col-8'>
                        <ContentContainer profile={props.profile}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Mains;