import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Filter from "./Filter/FilterTemplate";
import './ProductsPage.scss';
import Tag from "./Tag/TagTemplate";
import {
  nutriScoreArray,
  dietArray,
  depArray,
  allergyArray,
  alcoholFreeArray,
  grainTypeArray,
  raisedTypeArray,
  sustainabilityArray,
  sugarFreeArray,
  stuffFreeArray,
  artificialArray,
  freeRangeEggArray,
  priceArray
} from './Filter/Filter_Arrays';
import {
  bonusTag,
  priceFavTag,
  vegetarianTag,
  domesticTag,
  veganTag,
  freezerTag,
  sustainableTag,
  newTag
} from './Tag/Tag_array';
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (name, toggle, setToggle) => {
    let temp = true;
    if(checkedItems.length > 0) {
      checkedItems.map(item => {
        (item.name !== name) ? temp = true : temp = false;
      });
      // is missing way to update toggle after the initial submission to the array
      if(!temp) setCheckedItems([
        ...checkedItems,
        {
          name,
          setToggle,
          isToggled: !toggle
        }
      ]);
    };
    if(temp) setCheckedItems([
      ...checkedItems,
      {
        name,
        setToggle,
        isToggled: !toggle
      }
    ]);
    // is missing checking the array to see if by clicking on tag, their toggles are off so 
    // the clear all tags div goes away on its own
  };

  // const removeAllTags = () => checkedItems.map(item => {
  //   if(item.toggle) item.setToggle(false);
  // });


  // useEffect(() => {
  //   const checkActiveTags = () => {
  //     // if(checkedItems.length > 0) 
  //     console.log(checkedItems)
  //   };

  //   if(checkedItems) checkActiveTags();

  // }, [checkedItems]);

  // console.log(checkedItems)

  return (
    <>
      <Breadcrumbs />
      <div className="main-wrapper">
        <div className="filters-container">
          <Filter 
            title={'Nutri-score'} 
            optionsArray={nutriScoreArray} 
          />
          <Filter 
            title={'Diet'} 
            optionsArray={dietArray} 
          />
          <Filter 
            title={'Department'} 
            optionsArray={depArray} 
          />
          <Filter 
            title={'Allergy'} 
            optionsArray={allergyArray} 
          />
          <Filter 
            title={'Alcohol-free'} 
            optionsArray={alcoholFreeArray} 
          />
          <Filter 
            title={'Grain type'} 
            optionsArray={grainTypeArray} 
          />
          <Filter 
            title={'Raised Type'} 
            optionsArray={raisedTypeArray} 
          />
          <Filter 
            title={'Sustainability'} 
            optionsArray={sustainabilityArray} 
          />
          <Filter 
            title={'Sugar-free'} 
            optionsArray={sugarFreeArray} 
          />
          <Filter 
            title={'Additional'} 
            optionsArray={stuffFreeArray} 
          />
          <Filter 
            title={'Egg type'} 
            optionsArray={freeRangeEggArray} 
          />
          <Filter 
            title={'Artificials'} 
            optionsArray={artificialArray} 
          />
          <Filter 
            title={'Price'} 
            optionsArray={priceArray} 
          />
        </div>
        <div className="catalog-wrapper">
          <h1>Catalog</h1>
          <div className="tags-container">
            {checkedItems.length > 0 && <div 
              className="clear-filters"
              onClick={() => {}}
            >
              <h4>Clear all filters</h4>
            </div>}
            <Tag content={bonusTag} onClick={handleChange} />
            <Tag content={priceFavTag} onClick={handleChange} />
            <Tag content={vegetarianTag} onClick={handleChange} />
            <Tag content={domesticTag} onClick={handleChange} />
            <Tag content={veganTag} onClick={handleChange} />
            <Tag content={freezerTag} onClick={handleChange} />
            <Tag content={sustainableTag} onClick={handleChange} />
            <Tag content={newTag} onClick={handleChange} />
          </div>
          <div className="listed-products"></div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;