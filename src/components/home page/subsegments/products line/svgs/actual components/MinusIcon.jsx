import '../Svgs.scss';

const MinusIcon = ({color}) => {
    return (
        <svg 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        id="minus-icon">
            <path d="M6 12L18 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );
};

export default MinusIcon;