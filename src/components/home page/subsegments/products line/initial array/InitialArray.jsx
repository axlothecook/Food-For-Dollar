import image1 from './image/cereal.jpg';
import image2 from './image/orange-juice.jpg';
import image3 from './image/chips.jpg';
import image4 from './image/bread.png';
import image5 from './image/beef.jpg';

const initialProductsArray = [
    {
        name: 'Cereal',
        mass: '300g',
        link: image1,
        price: '0.78',
        amount: 1,
        shoppingListUnits: ["pieces"],
        discount: null,
        colorScheme: '#00ADE6'
    },
    {
        name: 'Orange Juice',
        mass: '700mL',
        link: image2,
        price: '0.90',
        amount: 1,
        shoppingListUnits: ["litres"],
        discount: '30%',
        colorScheme: '#FF7900'
    },
    {
        name: 'Fine chipies',
        mass: '500g',
        link: image3,
        price: '0.99',
        amount: 1,
        shoppingListUnits: ["pieces"],
        discount: null,
        colorScheme: '#00ADE6'
    },
    {
        name: 'White Bread',
        mass: '700g',
        link: image4,
        price: '0.43',
        amount: 7,
        shoppingListUnits: ["pieces"],
        discount: null,
        colorScheme: '#00ADE6'
    },
    {
        name: 'Fresh beef',
        mass: '800g',
        link: image5,
        price: '0.99',
        amount: 1,
        shoppingListUnits: ["pieces"],
        discount: '50%',
        colorScheme: '#FF7900'
    }
];

export default initialProductsArray;