import { useEffect, useRef, useState } from "react";
import useLink from "./useLink";

const usePreProcessor = (shouldRefetchRef, searchQuery, searchedProduct) => {
    let { autocompleteData, productsData, loading, error } = useLink(shouldRefetchRef, searchQuery, searchedProduct);
    const [autocompleteProductsArray, setAutocompleteProductsArray] = useState([]);
    const tempAutocompleteProductsArr = useRef();
    const [productsArray, setProductsArray] = useState([]); 
    const tempSearchResultsArr = useRef();
    useEffect(() => {
        function getAutocompleteResults() {
            console.log('hello before processing 1')
            tempAutocompleteProductsArr.current = [];
            autocompleteData.map((item) => {
                tempAutocompleteProductsArr.current = [
                    ...tempAutocompleteProductsArr.current,
                    {
                        id: item.id,
                        name: item.name
                    },
                ];
            });
            setAutocompleteProductsArray(tempAutocompleteProductsArr.current);
        };

        if(autocompleteData) getAutocompleteResults();

    }, [autocompleteData]);

    useEffect(() => {
        function getSearchedProducts() {
            console.log('hello before processing 2')
            tempSearchResultsArr.current = [];
            console.log(productsData)
            let totalTemp = productsData.searchResults[1].totalResults + productsData.searchResults[5].totalResults;
            productsData.searchResults[1].results.map((item) => {
                let fixedPrice = (Math.random() * (1 - 0.4) + 0.4).toFixed(2);
                let fixedDiscount = fixedPrice < 0.7 ? true : false;
                let fixedWeight = `${Math.floor(Math.random() * 1000)} ${fixedDiscount ? 'g' : 'pieces'}`;
                tempSearchResultsArr.current = [
                    ...tempSearchResultsArr.current,
                    {
                        id: item.id,
                        name: item.name,
                        number: item.servings.number,
                        mass: fixedWeight,
                        thumbnail: item.image,
                        images: item.images,
                        description: item.generatedText,
                        nutritionValues: item.nutrition,
                        ingredientList: item.ingredientList,
                        tags: item.badges,
                        brand: item.brand,
                        price: fixedPrice,
                        discount: fixedDiscount,
                        colorScheme: fixedDiscount ? '#FF7900' : '#00ADE6'
                    },
                ];
            });
            setProductsArray({
                amountOfProducts: totalTemp,
                array: tempSearchResultsArr.current
            });
        };

        if(productsData) getSearchedProducts();

    }, [productsData]);

    return {
        autocompleteProductsArray,
        productsArray,
        // loading, 
        // error
    };
};

export default usePreProcessor;