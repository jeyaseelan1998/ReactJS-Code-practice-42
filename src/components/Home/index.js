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
                            {
                                isDarkTheme ? 
                                    <img src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png" alt="home" className="route-image" />
                                    :
                                    <img src="https://assets.ccbp.in/frontend/react-js/home-light-img.png" alt="home" className="route-image" />
                            }
                            <h1 className={`route-name ${isDarkTheme? "route-name-dark" : ""}`}>Home</h1>
                        </div>
                    </div>
                )
            }
        }    
    </ThemeContext.Consumer>
)

export default Home