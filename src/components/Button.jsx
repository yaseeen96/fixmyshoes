import React from 'react'

const Button = ({ styles }) => {
  return (
    <a href="#contact">

    <button type="button" className={`py-4 px-6 bg-brown font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
    </a>
  )
}

export default Button