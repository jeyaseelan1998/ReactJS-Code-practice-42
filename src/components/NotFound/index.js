import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
    <ThemeContext.Consumer>
        {
            value => {
                const {isDarkTheme} = value
                return (
                    <div className={`route-bg-container  ${isDarkTheme?"route-bg-container-dark":""}`}>
                        <Navbar/>
                        <div className={`route-container`}>
                            <img src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" alt="not found" className="not-found--image" />
                            <h1 className={`route-name ${isDarkTheme? "route-name-dark" : ""}`}>Lost Your Way?</h1>
                            <p className={`not-found-description ${isDarkTheme?"not-found-description-dark" : ""}`}>
                                We cannot seem to find the page you are looking for
                            </p>
                        </div>
                    </div>
                )
            }
        }    
    </ThemeContext.Consumer>
)

export default Home