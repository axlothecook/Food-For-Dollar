import Product from './individual product/Product';
import './ProductManager.scss';
import initialProductsArray from './initial array/InitialArray';

const ProductMananager = () => {
    return <div className='product-manager-wrapper'>
        {initialProductsArray.map((product, idx) => (
            <Product key={idx} item={product} />
        ))}
    </div>
};

export default ProductMananager;