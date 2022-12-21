// import React from 'react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ContTab from './ContTab'

// export class Contests extends Component {
//     comps = [];
//     constructor(props){
//         super(props);
//         this.state = {
//             comps: this.comps,
//         }
//     }

//     componentDidCatch(error, errorinfo) {
//         console.log(error, errorinfo)
//     }

//     async componentDidMount(){
//         let url = "https://kontests.net/api/v1/all";
//         let data = await fetch(url);
//         let parsedData = await data.json(); 
//         console.log(parsedData);
//         this.setState({comps: parsedData.comps})
//     }

//     render() {
//         return (
//         <div>
//             {this.state.comps.map((element)=>{
//                 return <ContTab key={element.url} title={element.name} STime={element.start_time} ETime={element.end_time} Stat={element.status} STurl={element.url}  />
//             })}
//         </div>
//         )
//     }
// }

// export default Contests


function Contests(props) {
    const [contData, setContData] = useState([]);

    useEffect(() => {
        const getContData = async () => {
            let url = "https://kontests.net/api/v1/all";
            let response = await fetch(url);
            try {
                const responseJson = await response.json();
                const data = (responseJson);
                setContData(data);
                console.log(data)
            } catch (err) {
                console.error(err);
            }
        };
        getContData();
    }, []);

    return (
        <>
            <div className="container my-5">
                
                    {/* <ContTab key={element.url} mode={props.mode} title={element.name} STime={element.start_time} ETime={element.end_time} Stat={element.status} STurl={element.url} /> */}
                    <ContTab mode={props.mode} contData={contData} setContData={setContData} />
                
            </div>
        </>
    )
}

export default Contests
