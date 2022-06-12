import MenuItem from '../../menuItem/MenuItem'
import './menu.css'

export default function Menu() {
  return (
    <div className='menu'>
      <div className='menu-head'>
        <h2>Our Amazing Menu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
      </div>
      <div className='menu-items'>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
       <MenuItem/>
      </div>
    </div>
  )
}
