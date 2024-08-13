import { useState } from "react";


function Add() {

    const [transactionItem, setTransactionItem] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState("");

    return (
        <div>
            <h1>Add a new transaction</h1>

            <input type='text' placeholder='Enter amount' onChange={(event) => setTransactionItem(event.target.value)} /><br></br>
            <input type='text' placeholder='Enter amount' onChange={(event) => setAmount(event.target.value)} />
            <br></br>
            <select onChange={(event) => setTransactionType(event.target.value)}>
                <br></br>
                <option>Income</option>
                <option>Income</option>
                <option>Expense</option>
            </select>
            <br></br>

            {/* <button onClick={addTransact}>Add a transaction</button> */}
            <button >Add a transaction</button>
        </div>
    );
}

export default Add