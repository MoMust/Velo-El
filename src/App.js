import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Service from "./pages/_Service/Service";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
// import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./common/Footer/Footer.tsx";
import Header from "./pages/Home/Components/Header/Header.tsx";

import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <Header />
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
