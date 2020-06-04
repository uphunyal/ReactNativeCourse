import React, {useState, useEffect} from 'react';

import yelp from "../api/yelp";


export default  () =>{
    const [result, setResults] =useState([]);
    const [errorMessage, setErrorMessage] = useState ('');

    //Make api request, it is an asynchronious request\
    const  searchApi =async (searchTerm)=>{
        try{
            const response = await yelp.get('/search', {
                params: { 
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'

            }});
            //This is what we get from the api
            setResults(response.data.businesses);}
        catch(err){
            setErrorMessage("Something went wrong");
        }
    };
    //Run the function only once. useeffect is used, arrow function with search term and an empty arrow.
    //Can render multiple times depending on the second argument
    useEffect(()=>{searchApi('pasta')}, []);
    

    //This is bad code to first get the data from the api.
    // searchApi('pasta');
    return [searchApi, result, errorMessage];
};