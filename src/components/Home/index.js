import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const color = isDarkTheme ? 'home-container' : 'home-container1'
      return (
        <>
          <div className={color}>
            <Navbar />
            {isDarkTheme ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home-image"
                />
                <h1 className="title">Home</h1>
              </div>
            ) : (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home-image"
                />
                <h1 className="title1">Home</h1>
              </div>
            )}
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
