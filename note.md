the best way to learn is to do projects all the language and frame works are just components to build something more. how can you understand without see it work and how it works

PROJECT:
https://www.youtube.com/watch?v=Hl7diL7SFw8&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL

so for this project time assigned is 2 weeks and all new things learnth and observed and all question will be recorded here



1. first challenge was to install mysql workbench i was solve this huddle with the youtube video <https://www.youtube.com/watch?v=Hl7diL7SFw8&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL>.
2. then i installed the mysql in the terminal by downloading the sql repo from the mysql site in the form of .deb file in debian book work

3. things to learn squalise;

4. i took a express js route course <https://www.youtube.com/watch?v=0Hu27PoloYw&list=PLpPqplz6dKxXn6oItzG3rfR8fWxxQJPk9>
5. we use the Npm sequalise package to help us write and read our database e.g CRUD-copy read, update and Delete
6. the we use the package axios to connect and retrieve data from our data base. with the axios.get('the url of the server');
7. to avoid jaming of code, enhance readability, we create different script for the home page. to achieve this react-router-dom was downloaded with <npm install react-router-don>
8. the we imported {browserRouter as Router, Route, Routes(instead of Switch)}
9. then we route the page from the pages folder to the APP.js with the react-router-dom
10. so now we need to create a form where the user can create post right to our data base. and for this we will be  using the formik npm package with the <npm install formike>
 11. the formike package allows us to create form useing react systax
<>
<div className='createPostPage'>
//after importing the formike package we declare  it
      <Formik 
      initialValues={initialValues} the formik must have this three 
      onSubmit={onsubmit}
      validationSchema={}
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
</>

12. the we install yup<npm install yup> yup is a used for data validation. let me say you want to validate a user data you can download yup for it