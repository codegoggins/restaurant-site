import './image.css'

export default function Image(props) {
  return (
    <div className='image'> 
        <img className='img1' src={props.imgsrc} alt=''></img>
    </div>
  )
}
