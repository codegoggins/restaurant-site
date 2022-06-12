import './header.css'


export default function Header() {
  return (
    <div className='header'>
      
        <div className='home-text'>
            <h1 className='home-heading'>We let our <span>food</span> touch your <span>soul</span></h1>
            <h4>When you are lazy to cook , we are just a click away !</h4>
            <div className='buttons'>
            <button className='btn order-button'>Order Now</button>
            <button className='btn reserve-button'>Make Reservation</button>
            </div>
        </div>
        <div className='home-img-section'>
        <img className='home-img' src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt=''></img>
        </div>

    </div>
  )
}
