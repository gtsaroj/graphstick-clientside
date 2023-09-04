import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, // Import the Routes component

} from "react-router-dom";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import BlogPage from "./Components/BlogPage/BlogPage";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import CheckOut_page from "./Components/CheckOut Page/CheckOut_page";
import { Step } from "@mui/material";
import Proceed_Step from "./Components/Proceed_Step/Proceed_Step";

const Layout = () => {
  return (
    <div className="homePage">

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
          path: "products/:id", // Use "products/:id" instead of "/Products/:id"
          element: <Products />
        },
        {
          path: "product/:id", // Use "product/:id" instead of "/Product/:id"
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
          path: "blog",
          element: <BlogPage />
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
          element: <CheckOut_page />
        }

      ]
    }

  ])
  return (


    <RouterProvider router={router} />

  )
}

export default App;
