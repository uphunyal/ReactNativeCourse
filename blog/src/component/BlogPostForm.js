import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm =({onSubmit, initialValues})=>{
    const[title, setTitle]=useState(initialValues.title);
    const[content, setContent]=useState(initialValues.content);
    
    
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput  style={styles.contentinput} value={content} onChangeText={(text)=>setContent(text)}/>
            <Button title="Save Blog Post" onPress={()=>{onSubmit(title, content)}}/>
        </View>
    );
};
//Provide default values to props in case we do not pass any values\
BlogPostForm.defaultProps ={
    initialValues: {
        title:'',
        content: ''
    }
};

const styles = StyleSheet.create({

    input:{
        fontSize:18,
        borderWidth:1,
        borderColor: 'black',
        marginLeft: 10,
        borderRadius:6
    },
    contentinput:{
        fontSize:18,
        borderWidth:1,
        borderColor: 'black',
        marginLeft: 10,
        borderRadius:6,
        marginBottom: 10
        
    },
    label:{
        fontSize: 20,
        marginBottom: 10,
        marginLeft:10,
        fontStyle: "italic"
    }

});
export default BlogPostForm;