import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Service from "./pages/_Service/Service";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Footer from "./common/Footer/Footer.jsx";
import Navbar from "./common/Navbar/Navbar.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";

import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet className="outlet" />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
