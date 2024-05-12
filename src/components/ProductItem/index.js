import "./index.css"

const ProductItem = (props) => {
    const {eachProduct} = props
    const {image,title} = eachProduct
    
    return(
        <li className="product-item-container">
            <div className="product-image-container">
                <img  src={image} alt="product" className="product-image"/>
            </div>
            
            <div className="product-title-heart-img-container">
                {/* <div className="product-title-container">
                   
                </div> */}
                 <p className="product-title">{title}</p> 
                 {/* <div className="heart-img-container">
                   
                 </div> */}
                 <img src="../.././Vector.png" alt="heart" />
                
            </div>
            <p className="sign-in-text">Sign in or create account to see pricing</p>
           
        </li>
    )

}

export default ProductItem