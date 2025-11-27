import image1 from './image/cereal.jpg';
import image2 from './image/orange-juice.jpg';
import image3 from './image/chips.jpg';
import image4 from './image/bread.png';
import image5 from './image/beef.jpg';

const data = [
    {
        name: 'Cereal',
        image: image1,
        amount: 1,
        shoppingListUnits: ["pieces"],
        discount: null
    },
    {
        name: 'Orange Juice',
        image: image2,
        amount: 1,
        shoppingListUnits: ["litres"],
        discount: '30%'
    },
    {
        name: 'Fine chipies',
        image: image3,
        amount: 1,
        shoppingListUnits: ["pieces"],
        discount: null
    },
    {
        name: 'White Bread',
        image: image4,
        amount: 7,
        shoppingListUnits: ["pieces"],
        discount: null
    },
    {
        name: 'Fresh beef',
        image: image5,
        amount: 1,
        shoppingListUnits: ["pieces"],
        discount: '50%'
    }
];

export default data;