// import React from 'react'

import React, { Component } from 'react'

export class ContTab extends Component {

    render() {
        let {title, STime, ETime, Stat, STurl, mode} = this.props
        return (
            <>
                <div className={`card m-2 tAbo-${mode} tAo-${mode}`} style={{ width: "19rem" }}>
                    <div class="card-body">
                        <h5 class="card-title text-warning fs-4">{title}</h5>
                    </div>
                    <ul class="list-group list-group-flush ">
                        <li class="list-group-item ">Start at: {STime}</li>
                        <li class="list-group-item ">Ends at: {ETime}</li>
                        <li class="list-group-item ">{Stat}</li>
                    </ul>
                    <div class="card-body text-center">
                        <button href={STurl} target="_blank" type="button" class="btn btn-warning">Click for more INFO</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ContTab


// function ContTable(props) {
//     return (
//         <>
//             <div className={`card m-2 tAbo-${props.mode} tAo-${props.mode}`} style={{width: "19rem"}}>
//                 <div class="card-body">
//                     <h5 class="card-title text-warning fs-4">${props.contests[props.item].name}</h5>
//                 </div>
//                 <ul class="list-group list-group-flush ">
//                     <li class="list-group-item ">Start at: ${props.contests[props.item].start_time}</li>
//                     <li class="list-group-item ">Ends at: ${props.contests[props.item].end_time}</li>
//                     <li class="list-group-item ">${props.contests[props.item].status}</li>
//                 </ul>
//                 <div class="card-body text-center">
//                     <button href={`${props.contests[props.item].url}`} target="_blank" type="button" class="btn btn-warning">Click for more INFO</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ContTable
