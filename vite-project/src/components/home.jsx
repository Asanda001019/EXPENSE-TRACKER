import React from 'react'
import Add from './add'
import DisplayTransaction from './displayTransaction'

function Home (props){
  return (
    <div>
        <DisplayTransaction transaction={props.transaction}/>
        
        <Add addTransact={props.addTransact}/>
    </div>
  )
}

export default Home