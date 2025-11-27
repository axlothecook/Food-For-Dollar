import { useRef, useState } from 'react'
import './Home.scss';
import Navbar from './components/navbar/Navbar';
import Location from './components/home page/location tracking/Location';
import Slider from './components/home page/slider/Slider';
import Footer from './components/footer/Footer';
import ProductMananager from './components/home page/subsegments/products line/ProductManager';
import ListOfRecipes from './components/home page/subsegments/recipes line/Recipes';
import Subsegment from './components/home page/subsegments/Subsegment';
import TalkToChef from './components/home page/subsegments/ai line/AI-entry';
import usePreProcessor from './fetching/preProcessor';

function HomePage() {
  const [cart, setCart] = useState('0.00');
  const shouldRefetchRef = useRef(0);
  const searchQuery = useRef(['potato', 'juice', 'cookie', 'bread', 'beef']);

  let {productsArray, loading, error} = usePreProcessor(shouldRefetchRef, searchQuery);
  const arrayToDisplay = [
    {
      id: 1,
      component: <ProductMananager array={productsArray} />,
      mainText: 'You may want',
      subText: 'See More'
    },
    {
      id: 2,
      component: <ListOfRecipes />,
      mainText: 'What are we eating today?',
      subText: 'To all budget recipes'
    },
    {
      id: 3,
      component: <TalkToChef />,
      mainText: 'Or talk to our Chef',
      subText: 'Ask away'
    }
  ];

  // console.log('productsArray in home:');
  // console.log(productsArray);
  // console.log(loading.current);
  // console.log(error.current);

  return (
    <div className="home-wrapper">
      <div className='home-wrapper-child'>
        <Navbar 
          amount={cart} 
          array={productsArray} 
          searchQuery={searchQuery}
        />
        <Location />
        <Slider />
        <div className='subsegment-home-wrapper'>
          {arrayToDisplay && arrayToDisplay.map((item) => (
            <Subsegment 
              key={item.id} 
              mainText={item.mainText} 
              subtext={item.subText} 
              component={item.component}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
