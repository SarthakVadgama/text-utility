import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactME from './ContactME';

export default function Contact() {

  const SocialMed = () => {
    window.open(`https://twitter.com/sarthak_vadgama`, '_blank')
  }

  const SocialMedIns = () => {
    window.open(`https://www.instagram.com/sarthak_vadgama/`, '_blank')
  }
  
  const SocialMedMail = () => {
    window.open(`https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Avadgamasarthak%40gmail.com`, '_blank')
  }

  return (
    <div>
      <ContactME />
      <div className="container wpnav">
        <h1 className='text-center' style={{ fontSize: '80px' }}>Contact Me</h1>
        <div className="container my-5 text-center d-grid gap-3">
          <button className="btn btn-primary px-4" style={{ fontSize: '30px' }} onClick={SocialMed}>
            <i class="bi bi-twitter m-3"> </i>
            Twitter
          </button>
          <button className="btn btn-danger px-4" style={{ fontSize: '30px' }} onClick={SocialMedIns}>
            <i class="bi bi-instagram m-3"> </i>
            InstaGram
          </button>
          <button className="btn btn-success px-4" style={{ fontSize: '30px' }} onClick={SocialMedMail}>
            <i class="bi bi-envelope m-3"> </i>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}
