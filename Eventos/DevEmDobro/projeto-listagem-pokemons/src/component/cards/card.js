import React from 'react';
import './card.css'

export default function Card(props) {
    return (
        <>
            <li className='pokemon-card'>
                <div className='info'>
                    <span>{props.name}</span>
                    <span>#{props.number}</span>
                </div>

                <img className='gif' src={props.img} alt={props.name} />

                <ul className='types'>
                    <li className={`type ${props.type}`}>{props.type}</li>
                    {props.type2 && <li className={`type ${props.type2}`}> {props.type2}</li>}
                </ul>

                <p className='description'>{props.text}</p>
            </li>
        </>
    );
}