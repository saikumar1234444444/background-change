import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="container">
    <Navbar />
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="home-image"
    />
    <h1>Lost Your Way</h1>
    <p>We cannot seem to find the page</p>
  </div>
)
export default NotFound
