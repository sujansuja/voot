import React from 'react'
import { Link } from 'react-router-dom';
import './css/FilterButtons.css';


function Buttons(props) {
    return (
        <Link to={props.link} className='filter-btn'>
            {props.text}
        </Link>
    )
}


export default function FilterButtons(props) {
    return (
        <div className='filter-btn-cont'>
            <div> {props.data.map(btn =>
                <Buttons text={btn.text} link={btn.link} key={Math.random()} />
            )}
            </div>
        </div>
    )
}
