import '../Svgs.scss';

const PlusIcon = ({color}) => {
    return (
        <svg 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        id="plus-icon"
        >
            <path d="M4 12H20M12 4V20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    );
};

export default PlusIcon;