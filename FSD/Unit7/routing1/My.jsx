// create a react application using functional component and react router dom
// 1, create route for home, shop, contact, and 404 no page 
// 2. implement navigation using link
// 3. display each page on respective route
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Shop from './Shop'
import Nopage from './Nopage'
function My(){
    return(
        <div>
            <Router>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/*" element={<Nopage/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default My