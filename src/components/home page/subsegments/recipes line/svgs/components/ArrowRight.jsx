import '../../Recipes.scss';

const ArrowRight = ({ rotateBy }) => {
    return (
        <svg 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        id="arrow-right"
        style={{transform: `rotate(${rotateBy}deg)`}}
        >
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );
};

export default ArrowRight;