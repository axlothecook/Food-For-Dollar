import './Product.scss';
import ArrowRight from '../svgs/actual components/Arrow_Right';
import MinusIcon from '../svgs/actual components/MinusIcon';
import PlusIcon from '../svgs/actual components/PlusIcon';

const Product = ({item}) => {
    return (
        <div className='product'>
            <div className='upper-part-of-product' style={{backgroundImage: `url(${item.link})`}}>
                <div className='triangle'></div>
                <div className='text-within-triangle'>
                    {item.discount && <h4>0.99</h4>}
                    <h3 style={{color: `${item.colorScheme}`}}>{item.price}</h3>
                </div>
            </div>
            <div className='lower-part-product'>
                <div className='product-name'>
                    <h3>{item.name}</h3>
                    <h4>{item.mass}</h4>
                </div>
                <div className='no-units-selected-div' style={{border: `1px solid ${item.colorScheme}`}}>
                    <ArrowRight color={item.colorScheme} />
                </div>
                {/* <div className='expanded-div' style={{border: '2px solid #FF7900'}}>
                    <div className='retract-unit' style={{border: '2px solid #FF7900'}}>
                        <MinusIcon color={'#FF7900'} />
                    </div>
                    <div className='amount'>2</div>
                    <div className='add-unit' style={{border: '2px solid #FF7900'}}>
                        <PlusIcon color={'#FF7900'} />
                    </div>
                </div> */}
                {/* <div className='expandable-div' style={{border: '1px solid #FF7900', color: '#FF7900'}}>
                    <h3>-</h3>
                    <h3>2</h3>
                    <h3>+</h3>
                </div> */}
            </div>
        </div>
    );
};

export default Product;