import React from 'react'

function TableBody(props) {
    const ftems = props.items
    const setftems = props.setItems

    const DeleteIteM = (id) => {
        console.log(id);
        const updateditems = ftems.filter((elem, ind) => {
            props.showAlert("Todo Item deleted successfully", "danger")
            return ind !== id
        })
        setftems(updateditems)
    }
    return (
        <>
            <div className="container">
                <h3>ToDo List</h3>
                <div className="row justify-content-center">
                    {
                        ftems.map((elem, ind) => {
                            return (
                                <div class={`card m-3 tAo-${props.mode} tAbo-${props.mode}`} style={{ width: "35rem" }}>
                                    <div class="card-body">
                                        <h5 class="card-title fs-6">Todo Number : <strong>{ind + 1}</strong></h5>
                                        <p class="card-text fs-4">{elem}</p>
                                        <button className='btn btn-danger' onClick={() => DeleteIteM(ind)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TableBody
