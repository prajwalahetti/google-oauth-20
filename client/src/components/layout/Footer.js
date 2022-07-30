import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    
    <footer className="site-footer">
     
      <div className="footer-container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by  
         <a rel="noreferrer" href={`https://github.com/prajwalahetti`}> Prajwal Ahetti</a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" rel="noreferrer" target="_blank" href={`#`}><FaFacebookF className='fa-facebook'/></a></li>
              <li><a className="github" rel="noreferrer" target="_blank"  href={`#`}><FaTwitter/></a></li>
              <li><a className="linkedin" rel="noreferrer" target="_blank" href={`https://www.linkedin.com/in/prajwal-ahetti-a60b15197/`}><FaLinkedinIn/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
   )
}

export default Footer