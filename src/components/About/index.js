import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
    <ThemeContext.Consumer>
        {
            value => {
                const {isDarkTheme} = value
                return (
                    <div className={`route-bg-container  ${isDarkTheme?"route-bg-container-dark":""}`}>
                        <Navbar/>
                        <div className={`route-container`}>
                            {
                                isDarkTheme ? 
                                    <img src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png" alt="about" className="route-image" />
                                    :
                                    <img src="https://assets.ccbp.in/frontend/react-js/about-light-img.png" alt="about" className="route-image" />
                            }
                            <h1 className={`route-name ${isDarkTheme? "route-name-dark" : ""}`}>About</h1>
                        </div>
                    </div>
                )
            }
        }    
    </ThemeContext.Consumer>
)

export default About