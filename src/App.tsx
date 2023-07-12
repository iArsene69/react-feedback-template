import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

export default function App() {
  return (
    <div className='max-w-3xl mx-auto my-10'>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </div>
  )
}
