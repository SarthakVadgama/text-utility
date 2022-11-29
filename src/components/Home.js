import React from 'react'
import '../css/index.css'
import '../css/welpage.css'
import Card from './Card'

export default function Home(props) {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <Card mode={props.mode} title="Text-Utility" desc="You can try different utilities related to text manipulation." link="/t-u" imgli="https://images.wallpaperscraft.com/image/single/texture_background_text_symbols_50473_1600x900.jpg" />
                    <Card mode={props.mode} title="To-Do's" desc="Add your ToDo items here and don't worry about closing browser." link="/to-do" imgli="https://imgscf.slidemembers.com/docs/1/1/433/check_list_table_diagram_432751.jpg" />
                    <Card mode={props.mode} title="Pass-Generator" desc="You can generate a customized random password and copy them." link="/ranPass" imgli="https://as2.ftcdn.net/v2/jpg/05/47/82/09/1000_F_547820901_X4j6R7qIcf5hjRsJMgTs2z0sTn2csRE2.jpg" />
                </div>
            </div>
        </div>
    )
}
