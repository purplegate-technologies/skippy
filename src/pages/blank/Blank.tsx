import { Link } from 'react-router-dom'
import  './blank.css'

const Blank = () => {
  return (
    <div className='h-screen text-center'>
        <h1>404</h1>
        <Link to="/">Go Home</Link>
    </div>
  )
}

export default Blank