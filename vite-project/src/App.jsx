import { useState } from 'react'
import Home from './components/home';
import Login from './components/login';
import Add from './components/add';
import './App.css'
import DisplayTransaction from './components/displayTransaction';
import SignUp from './components/signUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPageFound from './components/noPageFound';

function App() {

const [transaction ,setTransaction] =useState([]);
 
const addTransact =(transactionItem, amount, transactionType)=>{

  setTransaction ((transaction)=>[...transaction,{transactionItem:transactionItem, amount:amount, transactionType:transactionType}])

  console.log(transaction)

}

  return (

    <div className='container'>

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home addTransact={addTransact} transaction={transaction}/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='*' element={<NoPageFound/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
    
  )
}


export default App

