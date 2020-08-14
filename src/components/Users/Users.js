import React from 'react'
import css from './Users.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import userPhoto from '../img/userPhoto.jpg'
import { NavLink } from 'react-router-dom'

let Users = (props) => {

    let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            <div className={css.div}>
                {pages.map(u =>{
                    return <span
                            onClick={() => {props.onPageChanged(u)}}
                            className={props.currentPage === u && css.selectedPage}>
                                {u}
                            </span>})}
            </div>
            {props.users.map(u => <div
                className={css.users}
                key={u.id}
                >
                    <span>
                        <NavLink to={'./home/' + u.id}>
                            <div>
                                <img className={css.imgProfile} src={u.photos.small != null? u.photos.small : userPhoto}/>
                            </div>
                        </NavLink>
                        <div>
                            {u.followed? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={()=>{ props.unfollow(u.id)}}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={()=>{ props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                    </span>
                </div>
            )}
        </div>
    )
}

export default Users;