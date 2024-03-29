import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,

} from "react-router-dom";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import CheckOutPage from "./Components/CheckOut Page/CheckOutPage";
import Signup from "./Authenticator/Signup/Signup";
import Login from "./Authenticator/Login/Login";
import Profile from "./Profile/Profile";
import Offer from "./Pages/Offer/Offer";
import Wishlist from "./Components/Wishlist/Wishlist";
const Layout = () => {
  return (
    <div className="flex flex-col items-stretch justify-center">

      <Navbar />
      <Outlet />
      <Footer />
    </div>

  )
}


function App() {




  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "products/:id",
          element: <Products />
        },
        {
          path: "product/:id",
          element: <Product />
        },
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "/checkout",
          element: <CheckOutPage />
        },
        {
          path: '/signup',
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/offer/:id",
          element: <Offer />
        }
        , 
        {
          path: "/wishlist",
          element : <Wishlist/>
      }

      ]
    }

  ])
  return (


    <RouterProvider router={router} />

  )
}

export default App;