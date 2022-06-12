import './contact.css'

export default function Contact() {
  return (
    <div className='contact'>
       <div className='contact-wrapper'>
           <div className='contact-head'>
              <h2>Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           <div className='contact-main'>
                <div className='contact-left'>
                        <h3 className='contact-left-title'>Restaurant Information</h3>
                        <div className='address-info'>
                              <i className="fa-solid fa-house"></i>
                              <div className='text'>
                              <span>1, 1 Ashish Shopping Centre, C G Road, Navrangpura</span>
                              <span> Ahmedabad, Gujrat</span>
                              </div>

                          </div>

                          <div className='contact-info'>
                              <i className="fa-solid fa-phone"></i>
                              <div className='text'>
                              <span>(+91) 9829334523</span>
                              <span>+123 7827291</span>
                              </div>
                          </div>

                          <div className='email-info'>
                              <i className="fa-solid fa-envelope"></i>
                              <div className='text'>
                                <span>soulfoody@gmail.com</span>
                              </div>
                          </div>
                          <div className='social'>
                          <span className='social-head'>Connect with us on our social media platforms</span>
                                <div className='social-connection'>
                                    <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                                    <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                                    <a href='https://www.google.com/' target='_blank' rel="noreferrer"><i className="fa-brands fa-google"></i></a>
                                    <a href='https://twitter.com/i/flow/login' target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                                </div>
                          </div>
                </div>
                <div className='contact-right'>
                      <h3 className='contact-right-title'>Leave us a message</h3>
                      <form className='msg-form'>
                        <input type='text' placeholder='Enter your full name' />
                        <input type='email' placeholder='Enter your email' />
                        <input type='text' placeholder='Enter your phone' />
                        <textarea placeholder='Enter your message'/>
                        <button className='submit-button'>Send Message</button>
                      </form>
                </div>
           </div>
           <div className='contact-map'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4449.933967807155!2d72.5577576997609!3d23.037542455669637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f3428b45fd%3A0x4ed48b21104192b4!2sAshish%20Complex!5e0!3m2!1sen!2sin!4v1654895215412!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} title='' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
       </div>
    </div>
  )
}
