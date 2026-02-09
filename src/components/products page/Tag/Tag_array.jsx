import PriceIcon from "./svgs/actual components/PriceIcon";
import VegetarianIcon from "./svgs/actual components/VegeterianIcon";
import VeganIcon from "./svgs/actual components/VeganIcon";
import DomesticIcon from "./svgs/actual components/DomesticIcon";
import FreezerIcon from "./svgs/actual components/FreezerIcon";
import SustainableIcon from "./svgs/actual components/SustainableIcon";
import NewIcon from "./svgs/actual components/NewIcon";

//add
const bonusTag = {
    text: 'BONUS',
    icon: null,
    amount: 90,
    fontWeight: 500,
    mainTextClr: '#FF7900',
    subTextClr: '#FF7900'
};

//add
const priceFavTag = {
    text: 'Price favourite',
    icon: <PriceIcon />,
    amount: 30,
    fontWeight: 400,
    mainTextClr: '#42c3e4',
    subTextClr: '#647887'
};

const vegetarianTag = {
    text: 'Vegetarian',
    icon: <VegetarianIcon />,
    amount: 27,
    fontWeight: 400,
    mainTextClr: '#68bc45',
    subTextClr: '#647887'
};

//add
const domesticTag = {
    text: 'Domestic',
    icon: <DomesticIcon />,
    amount: 136,
    fontWeight: 400,
    mainTextClr: '#fa2e82',
    subTextClr: '#647887'
    
};

const veganTag = {
    text: 'Vegan',
    icon: <VeganIcon />,
    amount: 17,
    fontWeight: 400,
    mainTextClr: '#006f45',
    subTextClr: '#647887'
};


const freezerTag = {
    text: 'Freezer',
    icon: <FreezerIcon />,
    fontWeight: 400,
    amount: 41,
    mainTextClr: '#86c5ec',
    subTextClr: '#647887'
};

const sustainableTag = {
    text: 'Sustainable',
    icon: <SustainableIcon />,
    fontWeight: 400,
    amount: 40,
    mainTextClr: '#8cb73f',
    subTextClr: '#647887'
};

//add
const newTag = {
    text: 'NEW',
    icon: <NewIcon />,
    fontWeight: 500,
    amount: 5,
    mainTextClr: '#fa2e82',
    subTextClr: '#fa2e82'
};

export {
    bonusTag,
    priceFavTag,
    vegetarianTag,
    domesticTag,
    veganTag,
    freezerTag,
    sustainableTag,
    newTag
};