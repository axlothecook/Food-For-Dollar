import { useContext, useEffect, useRef } from 'react';
import './SearchBar.scss';
import SearchIcon from "../icons/components/SearchIcon";
import { NavbarDataContext } from '../../../fetching/Contexts';

const SearchBar = () => {
    const { productsArray, searchQuery } = useContext(NavbarDataContext);
    const dialogRef = useRef(false);

    const tempProductsArray = [
        {
            name: 'wwwwwwww'
        },
        {
            name: 'ooooo'
        },
        {
            name: '22222222'
        },
        {
            name: 'iiiuiuiui'
        },
        {
            name: 'gwqqqqqqqq'
        }
    ];
    console.log(productsArray);

    function openModal() {
        if(dialogRef.current) dialogRef.current.showModal();
    };

    console.log('is dialog open 1? ' + dialogRef.current.open)

    useEffect(() => {
        const handler = (event) => {
            console.log('is dialog open 2? ' + dialogRef.current.open)

            if (dialogRef.current.open && event.target.contains(dialogRef.current)) dialogRef.current.close();
        };

        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    return (
        <div className="search-bar-wrapper">
            <div className='fake-input-div' onClick={() => openModal()}>
                <SearchIcon width={'1.2rem'} />
                <h3>What are you looking for?</h3>
            </div>
            <dialog ref={dialogRef} onClick={(e) => e.stopPropagation()}>
                <div className='modal-child-wrapper'>
                    <div className="input-wrapper">
                        <SearchIcon width={'1.2rem'} />
                        <input 
                        id='input'
                        placeholder='What are you looking for?' 
                        onInput={(e) => {
                            // searchQuery.current = e.value.target;
                            console.log(e.target.value);
                        }}
                        /> 
                    </div>
                    {/* <h1>hello</h1> */}
                    {tempProductsArray && <ul>
                        {tempProductsArray.map((item) => (
                            <li key={item.name}>
                                <SearchIcon width={'1.5rem'} />
                                <h3>{item.name}</h3> 
                            </li>
                        ))}
                    </ul>}
                </div>
            </dialog>
        </div>
    );
};


export default SearchBar;