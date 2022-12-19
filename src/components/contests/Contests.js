// import React from 'react'
import React, { Component } from 'react'
import ContTab from './ContTab'

export class contests extends Component {
    comps = [];
    constructor(){
        super();
        this.state = {
            comps: this.comps,
        }
    }

    componentDidCatch(error, errorinfo) {
        console.log(error, errorinfo)
    }

    async componentDidMount(){
        let url = "https://kontests.net/api/v1/all";
        let data = await fetch(url);
        let parsedData = await data.json(); 
        console.log(parsedData);
        this.setState({comps: parsedData.comps})
    }

    render() {
        return (
        <div>
            {this.state.comps.map((element)=>{
                return <ContTab key={element.url} title={element.name} STime={element.start_time} ETime={element.end_time} Stat={element.status} STurl={element.url}  />
            })}
        </div>
        )
    }
}

export default contests


// function Contests(props) {
//     let url = "https://kontests.net/api/v1/all";
//     let response = fetch(url);

//     response.then((v) => {
//         return v.json();
//     }).then((contests) => {
//         let ihtml = ""
//         for (var item in contests) {
//             console.log(contests[item])
//             ihtml += 
//             <ContTable mode={props.mode} contests={contests} item={item} />
//         }
//         document.getElementById('cardContainer').innerHTML = ihtml;
//     })


//     return (
//         <>
//             <div className="container my-5">
//                 <div className={`row justify-content-center`} id="cardContainer">
                    
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Contests
