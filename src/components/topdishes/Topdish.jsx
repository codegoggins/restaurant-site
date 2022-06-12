import Dish from '../dish/Dish'
import './topDish.css'

export default function Topdish() {
  return (
    <div className='top-dishes'>
      <div className='top-dishes-heading'>
        <h2>Our Top Dishes</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ullam nostrum. Quo aliquid dolore excepturi harum, veniam impedit debitis inventore.</p>
      </div>
      <div className='top-dishes-post'>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      <Dish/>
      </div>
    </div>
  )
}
