import React from 'react'
import './App.css';

export default function card(props) {
  return (
    <div className='card'>
      <img src={props.img}/>
      <h2 className='title'>{props.title}</h2>
    </div>
  )
}
