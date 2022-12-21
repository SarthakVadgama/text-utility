// import React from 'react'

import React from 'react'

function ContTab(props) {

    const coData = props.contData;

    return (
        <>
            <div className={`row justify-content-center`} id="cardContainer">
                {
                    Array.isArray(coData) ? coData.map((element) => {
                        return (
                            <div className={`card m-2 p-0 tAbo-${props.mode} tAo-${props.mode}`} style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <h5 className={`card-title tAo-${props.mode} fs-4`}>{element.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush ">
                                    <li className={`list-group-item tAo-${props.mode} tAbo-${props.mode}`}>Start at: {element.start_time}</li>
                                    <li className={`list-group-item tAo-${props.mode} tAbo-${props.mode}`}>Ends at: {element.end_time}</li>
                                    <li className={`list-group-item tAo-${props.mode} tAbo-${props.mode}`}>Status: {element.status}</li>
                                </ul>
                                <div className="card-body text-center">
                                    <a href={element.url} target="_blank" type="button" className={`btn tAb-${props.mode} tA-${props.mode}`}>Click to visit Site</a>
                                </div>
                            </div>
                        )
                    })
                : null}
            </div>
        </>
    )
}


export default ContTab


// function ContTable(props) {
//     return (
//         <>
//             <div className={`card m-2 tAbo-${props.mode} tAo-${props.mode}`} style={{width: "19rem"}}>
//                 <div className="card-body">
//                     <h5 className="card-title text-warning fs-4">${props.contests[props.item].name}</h5>
//                 </div>
//                 <ul className="list-group list-group-flush ">
//                     <li className="list-group-item ">Start at: ${props.contests[props.item].start_time}</li>
//                     <li className="list-group-item ">Ends at: ${props.contests[props.item].end_time}</li>
//                     <li className="list-group-item ">${props.contests[props.item].status}</li>
//                 </ul>
//                 <div className="card-body text-center">
//                     <button href={`${props.contests[props.item].url}`} target="_blank" type="button" className="btn btn-warning">Click for more INFO</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ContTable
