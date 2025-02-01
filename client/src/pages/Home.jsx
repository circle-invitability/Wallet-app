import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


  function Home(){
        const [listOfPosts, setlistOfPosts] = useState([]);

      useEffect(() => {
      axios.get("http://localhost:3001/posts").then(response => JSON.stringify(response)).then(data => {
        if(Array.isArray(data)) {
          console.log('the data is an Array')
        }else{
            const mappedData = JSON.parse(data);
              setlistOfPosts(mappedData.data)
  }
      })
      },[1000])
   
 
return (
    
      <div className='App'>
        {listOfPosts.map((value, key) => {
          return (
            
            <div className='post'>
              <div className='title' key={value.title}> {value.title}</div>
               <div className='body'key={value.postText}> {value.postText}</div>
                <div className='footer'key={value.username}> {value.username}</div>
              </div>
            
          )
        })}
      </div>
    )
      
  }

       

// Replace with your actual API endpoint
 /* .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    if (Array.isArray(data)) { // Check if data is an array
      const mappedData = data.map(item => {
        // 'item' represents each object in the array
        // Perform operations on each object and return a new value

        // Example: Extract specific properties and create a new object
        return {
          id: item.id,
          name: item.name,
          // ... other properties
          formattedDate: formatDate(item.date) // Example of calling a function to format data
        };

        // Or, if you just want to display data:
        // console.log(item.name); // Access properties like this
        // return item.name; // This would create a new array of just names

        // Or, if you want to conditionally include data:
        // const newItem = { ...item }; // Create a copy to avoid modifying the original data
        // if (item.isActive) {
        //   newItem.status = "Active";
        // }
        // return newItem;

      });

      console.log(mappedData); // The 'mappedData' array contains the transformed objects

      // Example of using the mapped data (e.g., in React):
      // return (
      //   <ul>
      //     {mappedData.map(item => (
      //       <li key={item.id}>{item.name}</li>
      //     ))}
      //   </ul>
      // );

    } else {
      console.error('Data from API is not an array:', data);
      // Handle the error appropriately (e.g., display an error message)
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle fetch errors
  });


// Example formatDate function (you'll need to implement this based on your date format)
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Customize the date format as needed
}
*/
export default Home
