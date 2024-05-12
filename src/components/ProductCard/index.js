//  write your code from here 
import ProductItem from "../ProductItem"
import "./index.css"

import {Component} from "react"

class ProductCard extends Component{

    state = {productsList : []}

    componentDidMount(){
        this.getProductsLIst()
    }

    getProductsLIst = async() => {
        const response = await fetch("https://fakestoreapi.com/products")

        const data = await response.json()
        console.log(data)
        this.setState({productsList : data})

    }

    render(){
        const {productsList} = this.state
        return(
            <div className="product-card-main-container">
                <ul className="product-card-ul-container">
                    {
                        productsList.map((eachProduct) => (
                             <ProductItem key={eachProduct.id} eachProduct={eachProduct}/>
                        ))
                    }
                </ul>
               
            </div>
        )
    }
}


export default ProductCard