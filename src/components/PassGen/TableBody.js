import React from 'react'

function TableBody(props) {
    const ftems = props.items
    const setftems = props.setItems

    const DeleteIteM = (id) => {
        const updateditems = ftems.filter((elem, ind) => {
            props.showAlert("Saved password deleted successfully", "danger")
            return ind !== id
        })
        setftems(updateditems)
    }
    return (
        <>
            <div className="container my-4">
                <h3>Saved Passwords Appear here</h3>
                <div className="row justify-content-center">
                    {
                        ftems.map((elem, ind) => {
                            return (
                                <div class={`card m-3 tAo-${props.mode} tAbo-${props.mode}`} style={{ width: "22rem" }}>
                                    <div class="card-body">
                                        <h5 class="card-title fs-6">Password number : <strong>{ind + 1}</strong></h5>
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
