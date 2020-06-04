import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import { round } from 'react-native-reanimated';

const ResultsDetail=({restaurantdata})=>{
    return (
            <View style={styles.container}>
                <Image style ={styles.imageStyle} source= {{uri: restaurantdata.image_url}} />
                <Text style={styles.name}>{restaurantdata.name}</Text>
                <Text style={styles.name}>{restaurantdata.rating} Starts,  {restaurantdata.review_count} Reviews</Text>
         
             </View>)
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        

    },
    container:
    {
        marginLeft: 15
    },

    name: {
        fontWeight: 'bold',
        fontSize:20,
        
    }

   
});


export default ResultsDetail;