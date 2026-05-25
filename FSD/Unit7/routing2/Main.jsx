// implement the follwing comp in you react app main.jsx to set up the router and deffine the routes 
// Home.jsx for the Home page ,Product.jsx for products and no page
// create a react router including two routs home and product
// when the user clicks on the home page it should navigate to the home page and diplay welocme to OUR shop whithn h1 tag with blue color 
// also include link to product page 
// a product page that displays three products information(name,price and image using props)
// when a user clicks on product page link it should navigate to product page and display products information
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home'
import Product from './Product'
import Nopage from './Nopage'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

function Main(){
    const products=[{name:"P1",price:20000,pic:img1},
        {name:"P2",price:30000,pic:img2},
        {name:"P3",price:40000,pic:img3}
    ]
    return(<div>
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Product">Product</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Product" element={<Product data={products}/>}></Route>
                <Route path = "*" element = {<Nopage/>}/>
            </Routes>
        </Router>
    </div>)
}

export default Main