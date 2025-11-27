import '../../Navbar.scss';

const BasketIcon = () => {
    return (
        <svg 
            className='basket-icon'
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            id="basket-icon"
        >
            <path d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );
};

export default BasketIcon;