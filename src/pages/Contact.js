import React from 'react';
import LeftSide from '../assets/pizzaLeft.jpg';
import '../style/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='LeftSide' style={{ backgroundImage: `url(${LeftSide})` }}></div>
        <div className='RightSide'>
            <h1>Contact Us</h1>
            <form id='Contact-Form' method='POST'>
                <label htmlfor ="name">Name</label>
                <input name='name' type={'text'} placeholder="Enter Name"/>
                <label htmlfor ="email">Email</label>
                <input name='email' type={'email'} placeholder="Enter Email"/>
                <label htmlFor='message'>Message</label>
                <textarea name ="message" rows={6} placeholder="Type Message here."></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
