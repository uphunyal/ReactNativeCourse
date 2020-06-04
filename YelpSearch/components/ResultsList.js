import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import ResultsDetail from './ResultsDetail'

const ResultsList=({title, results, navigation})=>{

    if(!results.length){
        return null;
    }
    return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{title}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={results}
                    keyExtractor={result=>result.id}
                    // key={results.id}
                    renderItem={({item})=>{
                          return(
                                <TouchableOpacity onPress={()=>navigation.navigate('Result', {id: item.id})}> 
                                    <ResultsDetail restaurantdata={item} />
                                 </TouchableOpacity>)
                        
                    }}
                />
    
             </View>)
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize:22,
        fontWeight: 'bold',
        marginBottom:2,
        color: 'blue',
        marginLeft: 15,
        marginBottom:7 

    },
    container:{
        marginBottom:10
    }
});


export default withNavigation(ResultsList);