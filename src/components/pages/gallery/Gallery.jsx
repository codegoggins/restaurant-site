import Image from '../../image/Image'
import './gallery.css'
import ImageLinks from '../../../data/ImageData'

export default function Gallery() {
  return (
    <div className='gallery'>

    <div className='gallery-head'>
      <h2>Our restaurant gallery</h2>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className='row'>
         <div className='column'>
              <Image
                imgsrc={ImageLinks[0].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[1].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[2].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[3].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[4].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[5].imgsrc}
              />  
              <Image
                imgsrc={ImageLinks[6].imgsrc}
              />
         </div>

         <div className='column'>
              <Image
                imgsrc={ImageLinks[6].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[5].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[4].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[3].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[1].imgsrc}
              />
              <Image
                imgsrc={ImageLinks[2].imgsrc}
              />  
              <Image
                imgsrc={ImageLinks[0].imgsrc}
              />
         </div>
    </div>
    </div>
  )
}
