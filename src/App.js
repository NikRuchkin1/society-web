import React from 'react';
import './App.css';
import {makeStyles} from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import DialogsСontainer from './components/Dialogs/DialogsСontainer';
import { Route } from 'react-router-dom';
import MainContainer from './components/Home/MainContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login'

const Styless = makeStyles(()=>({

  main2:{
    maxWidth:1100,
    minWidth:1100,
    margin:'auto',
    zIndex:2,
  },
  header:{
    display:'flex',
  },
  box:{
    marginTop:55,
  }

}))


function App(props) {

  const css = Styless()

  let PortfolioProps = () => <MainContainer/>
  let DialogProps = () => <DialogsСontainer/>
  let UsersProps =() => <UsersContainer/>
  let LoginProps =() => <Login/>

  return (
    <div className={css.App}>
          <div className={css.main}>
                  <header className={css.header}><HeaderContainer/></header>
                <div className={css.main2}>
                  <div className='container-fluid'>
                    <div className={css.box}>
                      <div className='row align-item-center'>

                        <div className='col'>
                          <Route path='/Home/:userId?' render={PortfolioProps}/>
                          <Route path='/Message' render={DialogProps}/>
                          <Route path='/Users' render={UsersProps}/>
                          <Route path='/Login' render={LoginProps}/>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
          </div>
    </div>
  );
}

export default App;
