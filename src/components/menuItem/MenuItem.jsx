import './menuItem.css'

export default function MenuItem() {
  return (
    <div className='menuItem'>
        <div className='menu-item-wrapper'>
            <div>
            <img className='item-img' src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80' alt=''></img>
            </div>
            <div className='menu-item-info'>
                 <div className='name-price'>
                 <h4>Pancakes<span>$9.00</span></h4>    
                 <p>derit optio amet ab temporibus  asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                 </div>
            </div>
        </div>        
    </div>
  )
}
