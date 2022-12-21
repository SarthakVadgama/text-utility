import React from 'react'
import '../css/index.css'
import Card from './Card'

export default function Home(props) {
    return (
        <div>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <Card mode={props.mode} title="Text-Utility" icon="bi bi-card-text" desc="You can try different utilities related to text manipulation." link="/tools/t-u" imgli="https://images.wallpaperscraft.com/image/single/texture_background_text_symbols_50473_1600x900.jpg" />
                    <Card mode={props.mode} title="To-Do's" icon="bi bi-calendar-check" desc="Add your ToDo items here and don't worry about closing browser." link="/tools/to-do" imgli="https://imgscf.slidemembers.com/docs/1/1/433/check_list_table_diagram_432751.jpg" />
                    <Card mode={props.mode} title="Pass-Generator" icon="bi bi-shield-lock" desc="You can generate a customized random password and copy them." link="/tools/ranPass" imgli="https://www.thesslstore.com/blog/wp-content/uploads/2018/03/bigstock-Cyber-security-information-pr-205808122.jpg" />
                    <Card mode={props.mode} title="Coding Contests" icon="bi bi-file-earmark-code" desc="You can see details for the upcoming coding contests and apply from the link." link="/tools/contests" imgli="https://images.wallpaperscraft.com/image/single/code_programming_symbols_140997_2560x1440.jpg" />
                </div>
            </div>
        </div>
    )
}
