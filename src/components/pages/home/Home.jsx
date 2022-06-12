import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import Topdish from '../../topdishes/Topdish'
import Comments from '../../userComments/Comments'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <Header/>
        <Topdish/>
        <Comments/>
        <Footer/>
    </div>
  )
}
