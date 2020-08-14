import React from 'react'
import css from './Content.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, Redirect } from 'react-router-dom'

const  AaddPost = (props) => {

    let FIO = props.surname.map(name => <NavLink className={css.surname} key={name.id} to='/Home'>
                                            {name.name + ' ' + name.second}
                                        </NavLink>)

    return(
            <div className={css.posts} id={props.id}>
                <div className={css.boxPost}>
                    <div className={css.names}>
                        <img className={css.imgposts} src={props.img2} alt='#'/>
                        {FIO}
                    </div>
                    <div className={css.description}>
                        {props.text}
                    </div>
                </div>
            </div>
    )
}


function Content (props){

    let testPosts = props.posts.map(
        style => <AaddPost surname={props.surname} img2={props.img2}
                           id={style.id} text={style.text}>
                  </AaddPost>)

    const newPost = React.createRef();
    const Share = ()=> {
        props.Shared();
    }

    let onPostChange = () =>{
        let text = newPost.current.value;
        props.updateNewPostText(text)
    }

    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>


                    <div className={css.main}>
                        <div className={css.inputBox}>
                            <img className={css.img} src={props.img2} alt='#'/>
                            <form className={css.form}>
                            <NavLink className={css.linked} to='/Home/post'>
                                <input
                                    className={css.input}
                                    ref={newPost}
                                    value ={props.onPostText}
                                    onChange={onPostChange}
                                    >
                                </input>
                                <button
                                className={css.btn}
                                onClick={Share}
                                >
                                    Share
                                </button>
                            </NavLink>
                            </form>
                        </div>
                    </div>
                    <div>{testPosts}</div>


                </div>
            </div>
        </div>
    )
}

export default Content;