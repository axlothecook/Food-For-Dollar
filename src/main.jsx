import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router';
import routes from './routes.jsx';
import './index.css'
import { NavbarDataContext } from './fetching/Contexts.jsx';
// import HomePage from './Home.jsx';
// import ErrorPage from './components/error page/ErrorPage.jsx';
// import ProductsPage from './components/products page/ProductsPage.jsx';
// import RecipesPage from './components/recipe page/Recipes.jsx';


const router = createBrowserRouter(routes);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "products",
//     element: <ProductsPage />
//   },
//   {
//     path: "recipes",
//     element: <RecipesPage />
//   },
// ])

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
    <StrictMode>
      {/* <NavbarDataContext> */}
        <RouterProvider router={router} />
      {/* </NavbarDataContext> */}
    </StrictMode>
  // </BrowserRouter>
  ,
);
