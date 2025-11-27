import HomePage from './Home';
import ErrorPage from './components/error page/ErrorPage';
import ProductsPage from './components/products page/ProductsPage';
import Recipes from './components/recipe page/Recipes';
import CartPage from './components/cart page/CartPage';

const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: 'products/:name',
        element: <ProductsPage />
    },
    {
        path: 'recipes/:name',
        element: <Recipes />
    },
    {
        path: 'cart',
        element: <CartPage />
    },
];

export default routes;