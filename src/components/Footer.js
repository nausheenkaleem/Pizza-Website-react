import React from 'react'
import InstaIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../style/Footer.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='MediaIcons'>
            <InstaIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
      </div>
      <p> &copy; 2022 Nat'sPezzaria.com</p>
    </div>
  );
}

export default Footer
