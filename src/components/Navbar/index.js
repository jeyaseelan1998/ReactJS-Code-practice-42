import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
    <ThemeContext.Consumer>
        {
            value => {
                const {isDarkTheme, toggleTheme} = value

                return (
                    <header className={`navbar-container ${isDarkTheme ? "navbar-container-dark" : ""}`}>
                        {
                            isDarkTheme ? 
                                <img src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png" alt="website logo" className="website-logo" />
                                :
                                <img src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png" alt="website logo" className="website-logo" />
                        }
                        <ul className="nav-link-items">
                            <li><Link to="/" className={`nav-link ${isDarkTheme ? "nav-link-dark" : ""}`} >Home</Link></li>
                            <li><Link to="/about" className={`nav-link ${isDarkTheme ? "nav-link-dark" : ""}`} >About</Link></li>
                        </ul>
                        <button type="button" data-testid="theme" className="theme-btn" onClick={toggleTheme}>
                            {
                                isDarkTheme ?
                                    <img src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png" alt="theme" className="theme-img" />
                                    :
                                    <img src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png" alt="theme" className="theme-img" />
                            }
                        </button>
                    </header>
                )
            }
        }
    </ThemeContext.Consumer>
)

export default Navbar