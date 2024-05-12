import "./index.css"

const LogoAndIconsComponent = () =>(
    <div className ="logo-and-icons-main-container">
        <div className="hamburger-menu-and-logo-main-container">
            <img src="../.././solar_hamburger-menu-linear.png" alt="hamburger menu" className="hamburger-menu-icon"/>
            <img src="../.././Logo.png" alt="logo" className="logo-icon"/>
        </div>
        <div>
            <h1 className="logo-heading-text">Logo</h1>
        </div>
        <div className="search-icon-heart-shopping-bag-main-container">
            <img src="../.././search-normal.png" alt="search normal"/>
            <img src="../.././heart.png" alt="heart"/>
            <img src="../.././shopping-bag.png" alt="shopping bag"/>
            
        </div>
       
    </div>
)


export default LogoAndIconsComponent