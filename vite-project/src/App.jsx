import { useState } from 'react'
import Home from './components/home';
import Login from './components/login';
import Add from './components/add';
import './App.css'
import DisplayTransaction from './components/displayTransaction';
import SignUp from './components/signUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoPageFound from './components/noPageFound';

function App() {

const [transaction ,setTransaction] =useState([]);
 
const addTransact =(transactionItem, amount, transactionType)=>{

  setTransaction ((transaction)=>[...transaction,{transactionItem:transactionItem, amount:amount, transactionType:transactionType}])

  console.log(transaction)

}

  return (

    <Router>
    <div className='container'>

      <Switch>
        <Route exact path='./'>
        <Login/>

        </Route>

        <Route path='/home'>
          <Home addTransact={addTransact} transaction={transaction}/>
        </Route>

        <Route path='/signUp'>
          <SignUp/>
        </Route>

        <Route path='*'>
          <NoPageFound/>
        </Route>
      </Switch> 
    </div>
    </Router>
  )
}


export default App

