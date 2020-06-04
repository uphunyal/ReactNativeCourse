import React, {useContext} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm'
const CreateScreen =({navigation})=>{
    
    
    const {addPost}= useContext(Context)
    return (
        <BlogPostForm  onSubmit={(title, content)=>{
            addPost(title, content, ()=>navigation.navigate('Index'))
        }}/>
    );
};

const styles = StyleSheet.create({

    
});
export default CreateScreen;