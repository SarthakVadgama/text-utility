import React, { useState, useEffect } from 'react'
import TableBody from './TableBody'

const getLocItems = () =>{
    let list = localStorage.getItem('lists')
    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return []
    }
}

function Todo(props) {
    const [inputData, setInputData] = useState('Enter Your Text here...')
    const [items, setItems] = useState(getLocItems())

    const addItem = () => {
        if (!inputData) {

        } else {
            props.showAlert("Todo Item added successfully", "success");
            setItems([...items, inputData])
            setInputData('Enter Your Text here...')
        }
    }
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className="container my-4 p-3">
                <h2>Add Todo's</h2>
                <div class="mb-3">
                    <textarea class={`form-control tA-${props.mode} tAb-${props.mode}`} id="mainTodo" value={inputData} onChange={(e) => setInputData(e.target.value)} rows="2"></textarea>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary mb-3" onClick={addItem}>Add Todo</button>
                </div>
            < TableBody items={items} setItems={setItems} mode={props.mode} showAlert={props.showAlert} />
            </div>
        </>
    )
}

export default Todo

