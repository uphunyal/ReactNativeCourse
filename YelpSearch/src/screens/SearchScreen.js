import React, {useState} from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import SearchBar from "..//../components/SearchBar"
import yelp from "../api/yelp"
import useResults from "../hooks/useResults";
import ResultsList from "../../components/ResultsList";


const SearchScreen=()=>{
    
    const [term, setTerm]=useState(''); 
    const [searchApi, result, errorMessage]= useResults();
    
    // const [result, setResults] =useState([]);
    // const [errorMessage, setErrorMessage] = useState ('');

    // //Make api request, it is an asynchronious request\
    // const  searchApi =async (searchTerm)=>{
    //     try{
    //         const response = await yelp.get('/search', {
    //             params: { 
    //                 limit: 50,
    //                 term: searchTerm,
    //                 location: 'san jose'

    //         }});
    //         //This is what we get from the api
    //         setResults(response.data.businesses);}
    //     catch(err){
    //         setErrorMessage("Something went wrong");
    //     }
    // };
    // //Run the function only once. useeffect is used, arrow function with search term and an empty arrow.
    // //Can render multiple times depending on the second argument
    // useEffect(()=>{searchApi('pasta')}, []);
    

    // //This is bad code to first get the data from the api.
    // // searchApi('pasta');

    //Filter result by price

    const filterREsultsByPrice = (price) =>{
        return result.filter(newresult=>{
            return newresult.price==price;
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={newTerm=>setTerm(newTerm)}
                onTermSubmit={()=>searchApi(term)}
                //onTermSubmit={searchApi}
                />
                {errorMessage ? <Text>{errorMessage}</Text>: null}
                
                <SafeAreaView style={{flex:1}}>
                    <ResultsList  results={filterREsultsByPrice('$')} title='Cost Effective'/>
                    <ResultsList  results={filterREsultsByPrice('$$')} title='Bit Pricier'/>
                    <ResultsList  results={filterREsultsByPrice('$$$')} title='Big Spender'/>
                </SafeAreaView>

             
        </>
    )

};

const styles = StyleSheet.create({});

export default SearchScreen;