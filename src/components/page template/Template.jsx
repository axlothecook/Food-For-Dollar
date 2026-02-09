import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Template.scss';
import { NavbarDataContext } from '../../fetching/Contexts';
import { useRef, useState } from 'react';
import usePreProcessor from '../../fetching/preProcessor';

const Template = () => {
    const [cart, setCart] = useState(
        {
            total: '5.00',
            products: []
        }
    );
    const shouldRefetchRef = useRef(0);
    const [searchQuery, setSearchQuery] = useState();
    const [searchedProduct, setSearchedProduct] = useState();
    let { autocompleteProductsArray, productsArray, loading, error } = usePreProcessor(shouldRefetchRef, searchQuery, searchedProduct);
    
    console.log('autocomplete:');
    console.log(autocompleteProductsArray);

    console.log('productsArray:');
    console.log(productsArray);

    return (
        <div className='wrapper-parent'>
            <div className='wrapper-child'>
                <NavbarDataContext 
                value={{
                    cart,
                    autocompleteProductsArray,
                    productsArray, 
                    searchQuery, 
                    setSearchQuery,
                    searchedProduct,
                    setSearchedProduct
                }}>
                    <Navbar />
                    <Outlet />
                </NavbarDataContext>
            </div>
            <Footer />
        </div>
    );
};


export default Template;