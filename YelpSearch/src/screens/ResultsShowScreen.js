import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList, SafeAreaView} from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen =({navigation})=>{

  
    const [result, setResult]= useState(null);
      //Get the data sent from different screen
      const id= navigation.getParam('id');
     
      
    //Get business result
    const  getResult =async (id)=>{
       const response= await yelp.get(`/${id}`);
        setResult(response.data);

    };
    //Get the data only once
     
    useEffect (()=>{
        getResult(id);
    }, []);
  
    if(!result){
        return null;
    }
    return (
        <SafeAreaView style={{flex:1}}>
        <FlatList
            data={result.photos}
            keyExtractor= {photo=result.photo}
            renderItem = {({item})=>{
                return <Image style={styles.imageStyle} source= {{uri: item}} />
            }}
           
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    imageStyle: {
        height: 300,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 20
        
    }

});

export default ResultsShowScreen;

