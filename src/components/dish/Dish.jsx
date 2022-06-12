import './dish.css'

export default function Dish() {
  return (
    <div className='dish'>
        <div className='top-dish-post'>
         <div className='top-dish-img'>
           <img src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80' alt=''></img>
         </div>
         <div className='top-dish-info'>
            <span className='top-dish-title'>Pizza</span>
            <p className='top-dish-about'> nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi </p> 
         </div>
         <div className='top-dish-price'>
             <span>$3.29</span>
         </div>
      </div>
    </div>
  )
}
