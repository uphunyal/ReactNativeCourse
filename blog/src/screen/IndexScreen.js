import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';


//Hook to use the context

const IndexScreen =({navigation}) =>{

    const {state, getPost, deletePost} = useContext(Context);

    //Get the blog post once, add listener did focus to call again when index comes to focus again
    useEffect(()=>{
        getPost();
        const listener=navigation.addListener('didFocus', ()=>getPost())
        
        //Turn off listener
        return ()=>{
            listener.remove();
        };
    }, []);
    return (
        <View>
         
            <FlatList
                data={state}
                keyExtractor={(blogPosts)=>blogPosts.title}
                renderItem ={({item})=>{
                
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('BlogDetails', {id: item.id})}>
                            <View style={styles.viewStyle}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={()=>deletePost(item.id)}>
                                    <Feather style={styles.icon}name="trash"  />
                                </TouchableOpacity>
                            </View>
                    </TouchableOpacity> );
                }}
            />
        </View>
    )
};

// Display inside the navigation header
IndexScreen.navigationOptions=({navigation})=>{
    return {
        headerRight:()=>
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                <Feather name="plus" size={24} color="black"style={{marginRight:10}}/>
            </TouchableOpacity>
        
    };

};

const styles =  StyleSheet.create({

    viewStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth:1,
        borderColor: 'grey'
    },
    title:{
        fontSize: 22
    },
    icon:{
        fontSize:24
    }

});

export default IndexScreen;
