import React from 'react'
import '../css/index.css'
import '../css/welpage.css'
import Card from './Card'



export default function Home() {
    return (
        <div>
            <div className="container wpnav" id='wpnav'>
                <center>
                    <Card title="Text-Utility" desc="" link="/t-u" imgli="https://images.wallpaperscraft.com/image/single/texture_background_text_symbols_50473_1600x900.jpg"/>
                </center>
            </div>
        </div>
    )
}
