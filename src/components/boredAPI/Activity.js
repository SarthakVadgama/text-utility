import React from 'react'
import { useState } from 'react';

function Activity(props) {

    const [actdata, setActdata] = useState("Activity Appears Here");
    const [actType, setActType] = useState("None");
    const generateBTN = async () => {
        let url = 'https://www.boredapi.com/api/activity';
        let response = await fetch(url);
        try {
            const responseJson = await response.json();
            const data = (responseJson);
            setActdata(data.activity);
            setActType(data.type);
            props.showAlert("New Activity Generated", "success");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className="container my-5">
                <h3>Feeling Bored - Great Activities</h3>
                <center>
                    <div className={`card mt-4 p-4 tAo-${props.mode} tAbo-${props.mode}`} style={{ width: "100%", height: "auto" }}>
                        <div className="card-body">
                            <h1 className="card-title"><span className={`tAol-${props.mode}`}> Activity : </span>{actdata}</h1>
                            <br />
                            <p className='card-text fs-4'><span className={`tAol-${props.mode}`}>Type of activity : </span>{actType}</p>
                            <br />
                            <button className={`btn tAe-${props.mode} tA-${props.mode}`} onClick={generateBTN}>Generate</button>
                        </div>
                    </div>
                </center>
            </div>
        </>
    )
}

export default Activity
