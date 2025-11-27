import Product from './individual product/Product';
import './ProductManager.scss';

const ProductMananager = ({array}) => {
    return <div className='product-manager-wrapper'>
        {array && array.map(product => (
            <Product key={product.id} item={product} />
        ))}
    </div>
};

export default ProductMananager;