import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'

export default function Card(props) {
    return (
        <div class={`card p-1 mt-4 mx-3 tAo-${props.mode} tAbo-${props.mode}`} style={{ width: "20rem" }}>
            <img src={props.imgli} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <Link className='yo' id='logo' to={props.link}>
                    <button className='btn btn-primary'>Try-it</button>
                </Link>
            </div>
        </div>
    )
}