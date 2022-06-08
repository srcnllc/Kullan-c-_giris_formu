/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./button.css";


function Button({onClick}) {
  return (
      <div className='content' >
          <button className='button' onClick={onClick}>GİRİŞ</button>
          <a className='sifre' href="#">Şifremi Unuttum...</a>
      </div>
  )
}

export default Button