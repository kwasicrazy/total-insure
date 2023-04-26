import React from 'react'
import logo from './book.avif'

const Content = () => {
  return (
    <div className='content'>
        <h1>Need to talk to someone about INSURANCE?</h1>
        <h3>Our calendar is open.</h3>
        <h3>Ask us questions on your schedule.</h3>
        <button>Schedule a chat</button>
        <h6>If you prefer calling or direct emailing</h6>
        <h6>+233202891550 | <a href='H'>sethtsatsu0@gmail.com</a> | <a href='H'>care@totalinsure.com</a></h6>
        <img src={logo} alt='logo' />
    </div>
  )
}

export default Content