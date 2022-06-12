import './feedbackPost.css'

export default function Feedback() {
  return (
    <div className='feedback'>
        <div className='feedback-box'>
            <div className='box-top'>
                <div className='profile'>
                    <img className='profile-img' src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''></img>
                    <div className='name-email'>
                        <span className='name'>John Doe</span>
                        <span className='email'>johndoe@gmail.com</span>
                    </div>
                </div>
                <div className='reviews'>
                     <i className='fas fa-star'></i>
                     <i className='fas fa-star'></i>
                     <i className='fas fa-star'></i>
                     <i className='fas fa-star'></i>
                     <i className='far fa-star'></i>
                </div>
            </div>
            <div className='customer-comments'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
            </div>
        </div>
    </div>
  )
}
