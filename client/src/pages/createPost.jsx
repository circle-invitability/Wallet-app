import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'  
import * as Yup from 'yup'

function createPost() {
    const initialValues = {
        titile: "",
        postText: "",
        username: "",
    };

    const validatiobSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    })
    const onSubmit = (data) => {
        console.log(data);//by default any function called inside the formik package will receive the data inside the from
    }
  return (
    <div className='createPostPage'>
      <Formik 
      initialValues={initialValues}
      onSubmit={onsubmit}
      >
      <Form className='formContainer'>
      <label>Title: </label>
        <Field 
        autocomplete="off"
        id="inputCreatePost" 
        name="title"
        placeholder="(Ex. title.......)"/>
           <label>Post: </label>
        <Field 
         autocomplete="off"
        id="inputCreatePost" 
        name="PostText"
        placeholder="(Ex. Post.....)"/>
           <label>Username: </label>
        <Field 
         autocomplete="off"
        id="inputCreatePost" 
        name="username"
        placeholder="(Ex. John415.......)"/>

        <button type='submit'>Create Post</button>
        
      </Form>
      </Formik>
    </div>
  )
}

export default createPost
