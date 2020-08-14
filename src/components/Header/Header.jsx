import React from 'react';
import logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

const Header = (props) => {

    return (
        <div className='container-fluid'>
            <header className={css.header}>
                    <div className={css.boxFixed}>
                    <div className={css.dopbox}>
                    <div className='row'>
                        <div className='col-4'>
                            <div className={css.first_box}>
                                <NavLink className={css.home} to='/Home' activeClassName={css.activeList}>Home</NavLink>
                                <NavLink className={css.home} to='/Message' activeClassName={css.activeList}>Message</NavLink>
                                <NavLink className={css.home} to='/Notification' activeClassName={css.activeList}>Notification</NavLink>
                                <NavLink className={css.home} to='/Users' activeClassName={css.activeList}>Users</NavLink>
                           </div>
                        </div>
                        <div className='col-4'>
                            <div className={css.img_box}>
                                <img src={logo} alt='#'/>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className={css.find_box}>
                                <input className={css.input} placeholder='Поиск..'></input>
                                {props.isAuth? props.login:
                                <NavLink className={css.login} to={'/login'}>
                                    login
                                </NavLink>
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
            </header>
        </div>
    );
}

export default Header;