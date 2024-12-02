import React from 'react'
import './css/Poster.css'
import { Link } from 'react-router-dom'

export default function Poster(props) {
    return (
        <div className='poster-cont'>
            <Link to={props.details.to}>
                <img src={props.details.src} alt="poster" title='Junooniyatt' />
            </Link>
        </div>
    )
}
