import { useState } from 'react';
import './Tag.scss';
import ExitIcon from './svgs/actual components/ExitIcon';

const Tag = ({ content, onClick }) => {
    const [toggle, setToggle] = useState(false);

    const handleClick = e => {
        setToggle(!toggle);
        onClick(e.currentTarget.id, toggle, setToggle);
    };

    return <div 
        className="tag-wrapper" 
        onClick={handleClick} 
        id={content.text}
    >
        {content.icon}
        <h4 
        style={{
            fontWeight: `${content.fontWeight}`,
            color: `${content.mainTextClr}`
        }}>
            {content.text}
        </h4>
        {toggle && <ExitIcon />}
        {!toggle &&
            <h4 style={{color: `${content.subTextClr}`}}>
                {content.amount}
            </h4>
        }
    </div>;
};

export default Tag;