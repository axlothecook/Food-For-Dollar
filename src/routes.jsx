import HomePage from './Home';
import ErrorPage from './components/error page/ErrorPage';
import ProductsPage from './components/products page/ProductsPage';
import Recipes from './components/recipe page/Recipes';
import CartPage from './components/cart page/CartPage';
import Template from './components/page template/Template';

const routes = [
    {
        path: "/",
        element: <Template />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/products/:name", element: <ProductsPage /> },
            { path: "/recipes/:name", element: <Recipes /> },
            { path: "/cart", element: <CartPage />}
        ]
    }
];

export default routes;