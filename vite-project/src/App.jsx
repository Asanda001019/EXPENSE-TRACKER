import { useState } from 'react'
import Add from './components/add';
import './App.css'
import DisplayTransaction from './components/displayTransaction';



function App() {

const [transaction ,setTransaction] =useState([]);
 
const addTransact =(transactionItem, amount, transactionType)=>{

  setTransaction ((transaction)=>[...transaction,{transactionItem:transactionItem, amount:amount, transactionType:transactionType}])

  console.log(transaction)

}

  return (

    <div className='container'>
      <DisplayTransaction transaction={transaction}/>
    
 <Add  addTransact={addTransact}/>

    </div>
  )
}


export default App

