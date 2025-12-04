import { useState, useRef, useEffect, useContext } from 'react';
import { APIContext } from './Contexts';

const useLink = (shouldRefetchRef, searchQuery) => {
    const SPOONACULAR_API_KEY = 'a523e0c68cfd44d999e4840572d1afb3';
    // const { SPOONACULAR_API_KEY } = useContext(APIContext);
    const [data, setData] = useState(null);
    const loading = useRef(false);
    const error = useRef(null);

    // console.log('api key:');
    // console.log( SPOONACULAR_API_KEY )

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try {
    //             Promise.all(
    //                 searchQuery.current.map(product =>
    //                     fetch(`https://api.spoonacular.com/food/ingredients/search?query=${product}&number=1`, 
    //                     {
    //                         method: 'GET',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                             'x-api-key': `${FOOD_API_KEY}`,
    //                         },
    //                     }).then(res => res.json())
    //                 )
    //             ).then(products => {
    //                 console.log(products);
    //                 // let temp = [];
    //                 // products.map(item => temp.push(...item));
    //                 // setData(temp);
    //             });
    //         } catch (err) {
    //             setData(null);
    //             error.current = err;
    //         } finally {
    //             loading.current = false;
    //         };
    //     };

    //     fetchData();
    // }, [searchQuery.current]);

    useEffect(() => {
        const fetchData = async() => {
            if(!searchQuery.current) {
                setData([]);
                return;
            };

            console.log('hello');
            // console.log(searchQuery.current === null)

            // try {
            //     console.log('hello');
            //     loading.current = true;
            //     fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${searchQuery.current}`, 
            //     {
            //         method: 'GET',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'x-api-key': `${FOOD_API_KEY}`,
            //         },
            //     })
            //     .then((response) => response.json())
            //     .then((response) => {
            //         console.log(response);
            //         // temp.current = response;
            //         setData(response);
            //     })
            //     .catch((e) => {
            //         console.log(`Fetch Weather Data Error: ${e}`);
            //         error.current = e;
            //     });
            // } catch (err) {
            //     setData(null);
            //     error.current = err;
            // } finally {
            //     loading.current = false;
            // };

            setData(...temp.current);

            console.log('data:');
            console.log(data);
        };

        if(shouldRefetchRef.current === 0) {
            fetchData();
            shouldRefetchRef.current = shouldRefetchRef.current + 1;
        };
        
    }, [searchQuery.current]);

    // console.log('temp.current:');
    // console.log(data);
    return { data, loading, error };
};

export default useLink;