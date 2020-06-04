import React, {useState,useContext} from 'react';
import {StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm'

const EditScreen =({navigation})=>{
    //get param passed using navigation getparam
    // console.log(navigation.getParam('id'));
    const id = navigation.getParam('id');
    
    const {state, editPost}= useContext(Context);
    const blogPost = state.find((blogPost)=>blogPost.id===id);

    

   
    return (
        
        <BlogPostForm 
            initialValues ={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content)=> {editPost(id, title, content, ()=>navigation.pop())}}
            
        />
    );
};

EditScreen.navigationOptions=()=>{
    return {
        title: 'Edit Blog',
       
    }
}

const styles = StyleSheet.create({

});
export default EditScreen;