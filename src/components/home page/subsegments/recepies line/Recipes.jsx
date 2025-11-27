import './Recipes.scss';
import recipeArray from './List-of-recipes';
import ArrowRight from './svgs/components/ArrowRight';
import { useRef, useState } from 'react';

const ListOfRecipes = () => {
    const scrollableRef = useRef(null);
    const [offsetCount, setOffsetCount] = useState(false);

    const onScroll = (offset) => {
        if (scrollableRef) {
            scrollableRef.current.scrollLeft += offset;
            (offset  === 1100) ? setOffsetCount(true) : setOffsetCount(false);
        };
    };

    return (
        <div className='recipes-wrapper-parent'>
            {offsetCount && 
                <div 
                className='arrow-left-wrapper' 
                onClick={() => onScroll(-1100)}>
                    <ArrowRight rotateBy={180} />
                </div>
            }
            <div className='recipes-wrapper-child' ref={scrollableRef}>
                {recipeArray.map((item) => (
                    <div 
                    key={item.id}
                    className='recipe' 
                    >
                        <div style={{backgroundImage: `url(${item.link})`}}></div>
                        <h3>{item.name}</h3>
                        <h4>{item.duration}</h4>
                    </div>
                ))}
            </div>
            {!offsetCount && 
                <div 
                className='arrow-right-wrapper' 
                onClick={() => onScroll(1100)}>
                    <ArrowRight rotateBy={0} />
                </div>
            }
        </div>
    );
};

export default ListOfRecipes;