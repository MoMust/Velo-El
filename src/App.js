import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Service from "./pages/_Service/Service";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";

import "./App.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="header-wrapper">
        <div className="header row d-flex ">
          <div className="left col-4">
            <p className="header-text-1">El fordon</p>
            <h2>Lätt, tyst & ren</h2>
            <p>
              Välkommen till en värld av icke kompromiss, <br></br>
              el cyklar i lättvikt och hög prestanda.
            </p>
          </div>
          <div className="right col-8">
            <span className="header-brand">E-BIKES</span>
          </div>
        </div>
      </div>

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
