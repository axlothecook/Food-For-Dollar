import { useEffect, useRef } from 'react';
import './SearchBar.scss';
import SearchIcon from "../icons/components/SearchIcon";

const SearchBar = ({ array, searchQuery }) => {
    const dialogRef = useRef(null);

    function openModal() {
        if(dialogRef.current) {
            // console.log(dialogRef.current)
            dialogRef.current.showModal();
        };
    };

    useEffect(() => {
        const handler = (event) => {
            // console.log(event.target)
            // console.log(dialogRef.current.open)

            if (dialogRef.current.open && event.target.contains(dialogRef.current)) dialogRef.current.close();
        };

        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    return (
        <div className="search-bar-wrapper">
        <div onClick={() => openModal()}>
          <SearchIcon />
          <h3>What are you looking for?</h3>
          {/* <input 
            id='input'
            placeholder='What are you looking for?' 
            // onInput={(e) => {
            //   // fetching(e.target.value);
            // }}
          /> */}
        </div>
        <dialog ref={dialogRef} onClick={(e) => e.stopPropagation()}>
            <input 
                id='input'
                placeholder='What are you looking for?' 
                onInput={(e) => {
                    // fetching(e.target.value);
                }}
            /> 
            {array && <ul>
                {array.map((item) => (
                    <li key={item.name}>
                    <SearchIcon />
                    <h3>{item.name}</h3> 
                    </li>
                ))}
            </ul>}
        </dialog>
      </div>
    );
};


export default SearchBar;