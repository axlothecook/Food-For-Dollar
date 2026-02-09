import { useContext, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';
import SearchIcon from "../icons/components/SearchIcon";
import { NavbarDataContext } from '../../../fetching/Contexts';

const SearchBar = () => {
    const { 
        autocompleteProductsArray,
        searchQuery, 
        setSearchQuery,
        setSearchedProduct
    } = useContext(NavbarDataContext);
    const dialogRef = useRef(false);
    const [inputValue, setInputValue] = useState();

    const tempProductsArray = [
        {
            id: 1077,
            name: 'milk'
        },
        {
            id: 11090,
            name: 'broccoli'
        },
        {
            //finish searching by word
            name: 'Pizza'
        },
        {
            name: 'Ice cream'
        },
        {
            name: 'Flour'
        }
    ];

    const openModal = () => (dialogRef.current) ? dialogRef.current.showModal() : null;

    // put only name if u use only name
    const onClick = (item) => {
        // const data = {
        //     ingredients: ['apple'],
        //     servings: 1
        // };
        // setSearchedProduct({
        //     ingredients: [item.name],
        //     servings: 1
        // });
        setSearchedProduct(item.name);
        // console.log(item)
        setInputValue(item.name);
        dialogRef.current.close();
    };

    useEffect(() => {
        const handler = (event) => (dialogRef.current.open && event.target.contains(dialogRef.current)) ? 
        dialogRef.current.close() : null;

        document.addEventListener("click", handler, true);

        return () => {
            document.removeEventListener("click", handler);
        };

    }, []);

    return (
        <div className="search-bar-wrapper">
            <div className='fake-input-div' onClick={() => openModal()}>
                <SearchIcon width={'1.1rem'} />
                <input 
                placeholder='What are you looking for?' 
                value={inputValue} 
                />
            </div>
            <dialog ref={dialogRef} onClick={(e) => e.stopPropagation()}>
                <div className='modal-child-wrapper'>
                    <div className="input-wrapper">
                        <SearchIcon width={'1.1rem'} />
                        <input 
                        id='input'
                        placeholder='What are you looking for?' 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onInput={(e) => setSearchQuery(e.target.value)}
                        // onKeyDown={(e) => {
                        //     if (e.key === 'Enter') onClick(e.target.value);
                        // }}
                        /> 
                    </div>
                    {!searchQuery && <ul>
                        {tempProductsArray.map((item, idx) => (
                            <li key={idx} onClick={() => onClick(item)}>
                                <SearchIcon width={'1.3rem'} />
                                <h3>{item.name}</h3> 
                            </li>
                        ))}
                    </ul>}
                    {searchQuery && <ul>
                        {autocompleteProductsArray.map((item, idx) => (
                            <li key={idx} onClick={() => onClick(item)}>
                                <SearchIcon width={'1.3rem'} />
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