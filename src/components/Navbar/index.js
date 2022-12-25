import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="logo"
              />
              <Link to="/">
                <h1 className="heading">Home</h1>
              </Link>
              <Link to="/about">
                <h1 className="heading">About</h1>
              </Link>

              <button
                type="button"
                testid="theme"
                className="button"
                onClick={changeTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-container1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="logo"
              />
              <Link to="/">
                <h1 className="heading1">Home</h1>
              </Link>
              <Link to="/about">
                <h1 className="heading1">About</h1>
              </Link>

              <button
                type="button"
                testid="theme"
                className="button"
                onClick={changeTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
