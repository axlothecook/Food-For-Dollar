import { useState } from "react";
import Arrow from "../icons/actual component/Arrow";
import './Filter.scss';
import Tick from "../icons/actual component/Tick";

const Filter = ({ title, optionsArray }) => {
    const [checkedItems, setCheckedItems] = useState({});
    const [toggle, setToggle] = useState(false);

    const handleChange = e => {
        setCheckedItems({
            ...checkedItems,
            [e.target.name]: e.target.checked
        });
    };

    // console.log(toggle)

    //className={`slide-up ${toggle ? 'slide-down' : ''}`}
    return <div className="filter-wrapper">
        <div className="filter-title" onClick={() => setToggle(!toggle)}>
            <h1>{title}</h1>
            <Arrow rotate={toggle} />
        </div>
        <div className="line-div"></div>
            <div>
                <div className={toggle ? 'slide-down' : 'slide-up'}>
                {optionsArray.map((option, idx) => (
                    <label key={idx} onClick={handleChange}>
                        <span>
                            <input
                                type='checkbox'
                                name={option.text}
                                checked={checkedItems[option.text]}
                            />
                            <span style={{borderColor: checkedItems[option.text] ? '#00ADE6' : '#000'}}>
                                {checkedItems[option.text] && <Tick />}
                            </span>
                        </span>
                        <h3>{option.text}</h3>
                        <h3>[ {option.amount} ]</h3>
                    </label>
                ))}
            </div>
            </div>
    </div>;
};

export default Filter;