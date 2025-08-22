import React from 'react'
import Logo from '../../assets/images/footer/logo.svg'

const Footer = () => {
  return (
    <div className='footerClass'>
      <p>
        Projeto construído para fins didáticos, com o objetivo de colocar em
        prática os conhecimentos de HTML, CSS e JavaScript aprendidos na DIO._
      </p>
      <img src={Logo} alt="" />
    </div>
  )
}

export default Footer