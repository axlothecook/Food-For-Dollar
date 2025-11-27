import { useState, useRef, useEffect, useContext } from 'react';
// import { APIKeysContext } from '../Contexts';

const useLink = (shouldRefetchRef, searchQuery) => {
    // const { VISUAL_CROSSING_API_KEY } = useContext(APIKeysContext);
    const FOOD_API_KEY = 'a523e0c68cfd44d999e4840572d1afb3';
    const [data, setData] = useState(null);
    const loading = useRef(false);
    const error = useRef(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                Promise.all(
                    searchQuery.current.map(product =>
                        fetch(`https://api.spoonacular.com/food/ingredients/search?query=${product}&number=1`, 
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'x-api-key': `${FOOD_API_KEY}`,
                            },
                        }).then(res => res.json())
                    )
                ).then(products => {
                    console.log(products);
                    // let temp = [];
                    // products.map(item => temp.push(...item));
                    // setData(temp);
                });
            } catch (err) {
                setData(null);
                error.current = err;
            } finally {
                loading.current = false;
            };
        };

        fetchData();
    }, [searchQuery.current]);

    // useEffect(() => {
    //     const fetchData = async() => {
                    // if(!searchQuery.current) {
            //     setData([]);
            //     return;
            // };
    //         shouldRefetchRef.current = false;
    //         try {
    //             loading.current = true;
    //             fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${searchQuery.current}`, 
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'x-api-key': `${FOOD_API_KEY}`,
    //                 },
    //             })
    //             .then((response) => response.json())
    //             .then((response) => {
    //                 console.log(response);
    //                 // temp.current = response;
    //                 setData(response);
    //             })
    //             .catch((e) => {
    //                 console.log(`Fetch Weather Data Error: ${e}`);
    //                 error.current = e;
    //             });
    //         } catch (err) {
    //             setData(null);
    //             error.current = err;
    //         } finally {
    //             loading.current = false;
    //         };

    //         // setData(...temp.current);

    //         console.log('data:');
    //         console.log(data);
    //     };

    //     if(shouldRefetchRef.current) fetchData();
        
    // }, [shouldRefetchRef]);

    console.log('temp.current:');
    console.log(data);
    return { data, loading, error };
};

export default useLink;