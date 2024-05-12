import LoremIpsumDollarComponent from "../LoremIpsumDollarComponent"
import LogoAndIconsComponent from "../LogoAndIconsComponent"
import ShopHomeComponent from "../ShopHomeComponent"
import RecommendedAndFilterComponent from  "../RecommendedAndFilterComponent"
import "./index.css"

const HeaderComponent = () =>(
    <div className="Header-main-container">
        <div className="lorem-ipsum-main-container">
            <LoremIpsumDollarComponent/>
        </div>
        <div>
             <LogoAndIconsComponent/>
             <ShopHomeComponent/>
             <RecommendedAndFilterComponent/>
        </div>
    </div>
)


export default HeaderComponent