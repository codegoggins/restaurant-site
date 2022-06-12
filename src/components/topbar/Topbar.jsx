import { useState } from 'react';
import { Link } from 'react-router-dom'
import './topbar.css'

export default function Topbar() {

  // use state for toggle menu 
  const [showMediaIcons , setShowMediaIcons] = useState(true);


  return (
    <div className='top'>
         <div className='topLeft'>
             <i className="rest-icon fa-solid fa-seedling fa-lg"></i>
             <span className='rest-name'>Soul Food</span>
         </div>

         <div className={showMediaIcons ? "topCenter topCenter-mobile" : "topCenter"}>
            <ul className='topList'>
                <li className='topListItem'>
                  <Link to="/" className='link'>Home</Link>
                </li>
                <li className='topListItem'>
                    <Link to="/menu" className='link'>Menu</Link>
                </li>
                <li className='topListItem'>
                <Link to="/contact" className='link'>Contact</Link>
                </li>
                <li className='topListItem'>
                <Link to="/gallery" className='link'>Gallery</Link>
                </li>
            </ul>

         </div>

         <div className='topRight'>
             <span>Log In</span>
             <span>Sign Up</span>
         </div>

         {/* hamburger menu  */}
         <div className='hamburger'>
          <a href='#' onClick={()=>setShowMediaIcons(!showMediaIcons)}><i className="fa-solid fa-bars"></i></a>
         </div>
    </div>
  )
}
