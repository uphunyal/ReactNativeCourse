import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const ShowScreen =({navigation})=>{
    //get param passed using navigation getparam
    // console.log(navigation.getParam('id'));

    const {state}= useContext(Context);

    const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    return (
        <View><Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text></View>
    );
};

ShowScreen.navigationOptions=({navigation})=>{
    return {
        title: 'Blog Details',
        headerRight:()=> <TouchableOpacity onPress={()=>navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <MaterialIcons name="edit" size={24} color="black" style={{marginRight:10}} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({

});
export default ShowScreen;