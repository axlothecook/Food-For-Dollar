import './Home.scss';
import Location from './components/home page/location tracking/Location';
import Slider from './components/home page/slider/Slider';
import ProductMananager from './components/home page/subsegments/products line/ProductManager';
import ListOfRecipes from './components/home page/subsegments/recipes line/Recipes';
import Subsegment from './components/home page/subsegments/Subsegment';
import TalkToChef from './components/home page/subsegments/ai line/AI-entry';

function HomePage() {
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
  
  return (
    <>
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
    </>
  );
};

export default HomePage;
