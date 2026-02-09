import { useState, useRef, useEffect, useContext } from 'react';
import { APIContext } from './Contexts';

const useLink = (shouldRefetchRef, searchQuery, searchedProduct) => {
    const SPOONACULAR_API_KEY = 'a523e0c68cfd44d999e4840572d1afb3';
    //{ "ingredients": ["eggs","bacon"], "servings": 2 }
    // const { SPOONACULAR_API_KEY } = useContext(APIContext);
    // console.log('api key:');
    // console.log( SPOONACULAR_API_KEY )
    const [autocompleteData, setAutocompleteData] = useState(false);
    const [productsData, setProductsData] = useState(false);
    const lastSearchQuerry = useRef();
    const lastLoadedProducts = useRef();
    const loading = useRef(false);
    const error = useRef(null);

    useEffect(() => {
        const fetchData = async() => {
            if(!searchQuery) {
                setAutocompleteData([]);
                return;
            };

            if(lastSearchQuerry.current === searchQuery) return;
            lastSearchQuerry.current = searchQuery;

            try {
                console.log('hello before fetch');
                loading.current = true;
                //https://api.spoonacular.com/food/ingredients/autocomplete?query=${searchQuery}&number=7&metaInformation=true
                //https://api.spoonacular.com/food/products/22347 
                //https://api.spoonacular.com/food/products/suggest?query=${searchQuery}&number=7
                fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${searchQuery}&number=10`, 
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': `${SPOONACULAR_API_KEY}`,
                    }
                })
                .then((response) => response.json())
                .then((response) => {
                    console.log('response:');
                    console.log(response);
                    setAutocompleteData(response);
                })
                .catch((e) => {
                    console.log(`Fetch Data Error: ${e}`);
                    error.current = e;
                });
            } catch (err) {
                setAutocompleteData(null);
                error.current = err;
            } finally {
                loading.current = false;
            };
        };

        if(searchQuery) fetchData();
        
    }, [searchQuery]);

    useEffect(() => {
        const loadProducts = () => {
            if(!searchedProduct) {
                setProductsData([]);
                return;
            };

            if(lastLoadedProducts.current === searchQuery) return;
            lastLoadedProducts.current = searchQuery;

            try {
                console.log('hello before fetch 2');
                loading.current = true; 
                //https://api.spoonacular.com/food/ingredients/${searchedProduct.id}/information?
                // fetch(`https://api.spoonacular.com/food/ingredients/map?`, 
                // {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'x-api-key': `${SPOONACULAR_API_KEY}`,
                //     },
                //     body: JSON.stringify(searchedProduct),
                // })
                console.log('searchedProduct: ');
                console.log(searchedProduct);
                fetch(`https://api.spoonacular.com/food/search?query=${searchedProduct}&number=30`, 
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': `${SPOONACULAR_API_KEY}`,
                    }
                })
                .then((response) => response.json())
                .then((response) => {
                    console.log('response 2:');
                    console.log(response);
                    setProductsData(response);
                })
                .catch((e) => {
                    console.log(`Fetch Data Error: ${e}`);
                    error.current = e;
                });
            } catch (err) {
                setProductsData(null);
                error.current = err;
            } finally {
                loading.current = false;
            };
        };

        if (searchedProduct) loadProducts();
    }, [searchedProduct]);

    return { 
        autocompleteData, 
        productsData,
        loading, 
        error 
    };
};

export default useLink;