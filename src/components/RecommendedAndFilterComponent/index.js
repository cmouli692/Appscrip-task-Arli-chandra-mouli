import "./index.css"

const RecommendedAndFilterComponent = () => (
    <div className="filter-hr-recommended-main-container">
        <h1 className="filter-text">Filter</h1>
        <hr className="hr-between-filter-and-recommended"/>
        <div className="recommended-text-arrow-left-container"> 
            <select className="select-container">
                <option className="recommended-text">Recommended</option>
                <option className="recommended-text">NEWEST FIRST</option>
                <option className="recommended-text">POPULAR</option>
                <option className="recommended-text">PRICE : HIGH TO LOW</option>
                <option className="recommended-text">PRICE : LOW TO HIGH</option>
            </select>
            {/* <h1 className="recommended-text">Recommended</h1> */}
            {/* <div className="arrow-left-img-container">
                <img src="../.././arrow-left.png" alt="arrow-left"/>
            </div>    */}
        </div>   
    </div>
)


export default RecommendedAndFilterComponent