import { useState } from 'react'
import Add from './components/add';
import './App.css'



function App() {

 




  const [transaction ,setTransaction] =useState([]);
  
  const addTransact = (transactionItem, amount, transactionType) => {
 
  const [transaction ,setTransaction] =useState([]);
    setTransaction[(transaction)=>[...transaction]]
   
    }
  return (

    <div className='container'>
    
 <Add/>

    </div>
  )
}


export default App

