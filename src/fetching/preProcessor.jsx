import { useEffect, useRef, useState } from "react";
import useLink from "./useLink";
import data from "./temporary";

const usePreProcessor = (shouldRefetchRef, searchQuery) => {
    // let { data, loading, error } = useLink(shouldRefetchRef, searchQuery);
    const tempArr = useRef([]);
    const [productsArray, setProductsArray] = useState([]);
    useEffect(() => {
        function fillData() {
            tempArr.current = [];
            let count = 0;
            data.map(item => {
                let fixedPrice = (Math.random() * (1 - 0.4) + 0.4).toFixed(2);
                let fixedWeight = `${Math.floor(Math.random() * 1000)} ${item.shoppingListUnits[0] === 'pieces' ? 'g' : item.shoppingListUnits[0]}`;
                tempArr.current = [
                    ...tempArr.current,
                    {
                        id: count,
                        name: item.name,
                        mass: fixedWeight,
                        link: item.image,
                        price: fixedPrice,
                        discount: item.discount,
                        colorScheme: item.discount ? '#FF7900' : '#00ADE6'
                    },
                ];
                count++;
            });

            // console.log('array:');
            // console.log(tempArr.current);
            setProductsArray(tempArr.current);
        };

        if(shouldRefetchRef.current === 0) {
            fillData();
            shouldRefetchRef.current = shouldRefetchRef.current + 1;
        };

        //searchQuery.current
    }, []);

    return {
        productsArray,
        // loading, 
        // error
    };
};

export default usePreProcessor;