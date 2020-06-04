import React from 'react';
import {View, Text,TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'; 

const SearchBar=({term, onTermChange, onTermSubmit})=>{
    return(<View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} color="black" />
        <TextInput
             placeholder='Search'
             autoCapitalize="none"
             autoCorrect={false}
             value={term} 
            //  onChangeText={newTerm=>onTermChange(newTerm)}
            onChangeText={onTermChange}

             onEndEditing={()=>onTermSubmit()}
             style={styles.inputStyle} />
         </View>);

};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor:'#D7DBDD',
        height:40,
        borderRadius:5,
        marginHorizontal: 10,
        flexDirection: "row",
        marginLeft: 15,
        marginBottom: 10


        
        
    },
    inputStyle:{
       
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;