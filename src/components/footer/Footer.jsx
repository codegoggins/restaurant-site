import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
         <div className='footer-top'>
            <div className='footer-left'>
                <div className='footer-left-head'>
                    <i className="rest-icon fa-solid fa-seedling fa-lg"></i>
                    <span className='rest-name'>Soul Food</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                <span className='social'>Stay connected with us</span>
                <div className='social-connection'>
                    <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://www.google.com/' target='_blank' rel="noreferrer"><i className="fa-brands fa-google"></i></a>
                    <a href='https://twitter.com/i/flow/login' target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            <div className='footer-right'>

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
            </div>
         </div>

         <div className='footer-bottom'>
          <p>All Rights reserved by <span>ⒸSoulFood</span> 2022</p>
         </div>
    </div>
  )
}
