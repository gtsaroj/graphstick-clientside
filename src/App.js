import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import BlogPage from "./Components/BlogPage/BlogPage";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import CheckOutPage from "./Components/CheckOut Page/CheckOutPage";
import Signup from "./Authenticator/Signup/Signup";
import Login from "./Authenticator/Login/Login";
import Profile from "./Profile/Profile";
import Offer from "./Pages/Offer/Offer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<>
        <Navbar/>
        <Products/>
        <Footer/>
        </>
        } />
        <Route path="/product/:id" element={<>
        <Navbar/>
        <Product/>
        <Footer/>
        </>} />
        <Route path="/about" element={<>
        <Navbar/>
        <About/>
        <Footer/>
        </>} />
        <Route path="/blog" element={<>
        <Navbar/>
        <BlogPage/>
        <Footer/>
        </>} />
        <Route path="/contact" element={<>
        <Navbar/>
        <Contact/>
        <Footer/>
        </>} />
        <Route path="/cart" element={<>
        <Navbar/>
        <Cart/>
        <Footer/>
        </>} />
        <Route path="/checkout" element={<>
        <Navbar/>
        <CheckOutPage/>
        <Footer/>
        </>} />
        <Route path="/signup" element={<>
        <Navbar/>
        <Signup/>
        <Footer/>
        </>} />
        <Route path="/login" element={<>
        <Navbar/>
        <Login/>
        <Footer/>
        </>} />
        <Route path="/profile" element={<>
        <Navbar/>
        <Profile/>
        <Footer/>
        </>} />
        <Route path="/offer/:id" element={<>
        <Navbar/>
        <Offer/>
        <Footer/>
        </>} />
        <Route path="/checkout" element={
          <>
          <Navbar/>
          <CheckOutPage/>
          <Footer/>
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
