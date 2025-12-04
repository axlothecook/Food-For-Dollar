import { useRef, useState } from 'react'
import './Home.scss';
import { NavbarDataContext } from './fetching/Contexts';
import Location from './components/home page/location tracking/Location';
import Slider from './components/home page/slider/Slider';
import ProductMananager from './components/home page/subsegments/products line/ProductManager';
import ListOfRecipes from './components/home page/subsegments/recipes line/Recipes';
import Subsegment from './components/home page/subsegments/Subsegment';
import TalkToChef from './components/home page/subsegments/ai line/AI-entry';
import usePreProcessor from './fetching/preProcessor';
import Template from './components/page template/Template';

function HomePage() {
  const [cart, setCart] = useState({
    total: '0.00',
    products: []
  });
  const shouldRefetchRef = useRef(0);
  const searchQuery = useRef();
  let {productsArray, loading, error} = usePreProcessor(shouldRefetchRef, searchQuery);
  const arrayToDisplay = [
    {
      id: 1,
      component: <ProductMananager />,
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
    <NavbarDataContext value={{ cart, productsArray, searchQuery }}>
      <Template>
        <Location />
        <Slider />
        <div className='home-wrapper'>
          {arrayToDisplay && arrayToDisplay.map((item) => (
            <Subsegment 
              key={item.id} 
              mainText={item.mainText} 
              subtext={item.subText} 
              component={item.component}
            />
          ))}
        </div>
      </Template>
    </NavbarDataContext>
  );
};

export default HomePage;
