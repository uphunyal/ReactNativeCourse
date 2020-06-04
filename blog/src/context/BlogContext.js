import React, {useState, useReducer} from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'

//Context, provider is used to share data to the nested child

// //Define context
// const BlogContext= React.createContext();

//Using reducer in place of state to manage data
const blogReducer =(state, action)=>{
    switch(action.type){
        case 'delete_blogpost':
            return state.filter((blogPost)=>blogPost.id!==action.payload);
            
        case 'edit_blogpost':
            
            return state.map((blogPost)=>{

                return blogPost.id ===action.payload.id ? action.payload : blogPost;
                
            });
        // case 'add_blogpost':
        //     return [...state, {
        //         id: Math.floor(Math.random()*9999),
        //         title: action.payload.title,
        //         content: action.payload.content
        //     }]; 
        case 'get_blogpost':
            return action.payload

        default:
            return state;
            
    }
};
 
 const addPost =(dispatch)=>{
     return async (title, content, callback)=>{
    // dispatch({type: 'add_blogpost', payload: {title, content}});
     callback();
    await jsonServer.post('/blogpost',{title, content});
};
};

 
 const getPost =dispatch =>{
     return async () =>{
    const response= await jsonServer.get('/blogpost');
    dispatch({type: 'get_blogpost', payload: response.data});
};
};

 const deletePost =(dispatch)=>{
    return async(id)=>{
        await jsonServer.delete(`/blogpost/${id}`);
        dispatch({type: 'delete_blogpost', payload: id});
};
};


const editPost =(dispatch)=>{
    return async(id, title, content, callback)=>{
        await jsonServer.put(`/blogpost/${id}`, {title, content})
    dispatch({type: 'edit_blogpost',  payload: {id, title, content}});
   if (callback){
       callback();
   }
};
};


// //Component for the context
// export const BlogProvider =({children}) =>{

//     // //State
//     // const [blogPost, setBlogPost]= useState([]);

//     //Reducer, reducer function and initial value as parameters
//     //blogPost==state is community convention
//     const [state, dispatch]= useReducer(blogReducer, []);

   

//     // //Add blogpost using state
//     // const addPost =()=>{
//     //     setBlogPost([...blogPost, {title: `Blog Post # ${blogPost.length+1}`}])
//     // }

//     // //Children is other components we may nest inside the blogprovider, using state
//     // return (<BlogContext.Provider value={{data: blogPost, addPost}}>{children}</BlogContext.Provider>);

//     //Using reducer
//     return (<BlogContext.Provider value={{data: state, addPost}}>{children}</BlogContext.Provider>);
    
// };



// export default BlogContext;

export const {Context, Provider}= createDataContext(blogReducer, {addPost, deletePost, editPost, getPost},[] );

