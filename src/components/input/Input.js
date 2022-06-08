import React from 'react';
import "./input.css";

function Input({type,placeholder,onChange}) {
  return (<input className='input' type={type} placeholder={placeholder} onChange={onChange} />)
}

export default Input