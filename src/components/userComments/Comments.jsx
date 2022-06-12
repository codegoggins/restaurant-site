import Feedback from '../feedbackPost/Feedback'
import './comments.css'

export default function Comments() {
  return (
    <div className='comments'>
      <h3 className='comments-title'>Customer's Feedback</h3>
      <div className='feedback-posts'>
        <Feedback/>
        <Feedback/>
        <Feedback/>
        <Feedback/>
        <Feedback/>
        <Feedback/>
      </div>
    </div>
  )
}
