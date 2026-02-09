import '../../ProductsPage.scss';

const Arrow = ({ rotate }) => {
    return (
        <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            id="arrow"
            style={{
                transition: "transform .4s",
                transform: rotate ? 'rotate(-180deg)' : 'rotate(0deg)',
            }}
        >
            <g id="layer1" stroke="black" strokeWidth=".7">
                <path d="M 4 6.2910156 L 3.2910156 7 L 3.6464844 7.3535156 L 10 13.708984 L 16.353516 7.3535156 L 16.708984 7 L 16 6.2910156 L 15.646484 6.6464844 L 10 12.291016 L 4.3535156 6.6464844 L 4 6.2910156 z "></path>
            </g>
        </svg>
    );
};

export default Arrow;