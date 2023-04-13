import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom"

// import Layout from "./pages/Layout";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Service from './pages/_Service/Service';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products/:id",
    element: <Products />
  },
  {
    path: "/product/:id",
    element: <Product />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
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
