<!-- 
<template>
    <div class="Search">Search For Puppies
    <img src="https://img.freepik.com/premium-vector/dog-cat-love-each-other-illustration_54454-5.jpg" style="width:100%" height="400px"/>
    <img src="https://i.insider.com/5d5c10eb4afbf902204e5f0b?width=1136&format=jpeg" style="width:100%"/>
    <h3>Friends for Life</h3>
    </div>

    <form @prevent.submit="">
    <input type="text" placeholder=" name or color or sex" /> 
    <button type="submit">Search</button>
</form>

    <ul v-if="searchResults.length">
    <li v-for ='dog in searchResults' :key='dog.id'>
       {{dog.name}} - {{dog.sex}} - {{dog.color}}
    
    </li>
</ul>
<div v-else>No Results found</div>


</template>

<script>


import axios from '../axios'

export default{
    data(){
        return{
          searchTerm : '',
          searchResults:[]
        }
    },


    methods: {
    async fetchData() {
      try {
        const response = await api.get('/api/dogs'); // Adjust the endpoint as per your backend
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

       

        }
    }
}
</script>
<style>
h3{
   margin-left: 0;
}

form{
    margin-top: 300px;
}
.Search{
    color: steelblue;
    margin-left:10px;
    font-size: 18px;
}
img{
    display: flex;
}
    
</style> -->

<!-- <template>
    <div class="Search">
      <h2>Search For Puppies</h2>
      <img src="https://img.freepik.com/premium-vector/dog-cat-love-each-other-illustration_54454-5.jpg" style="width:100%" height="400px" />
      <img src="https://i.insider.com/5d5c10eb4afbf902204e5f0b?width=1136&format=jpeg" style="width:100%" />
      <h3>Friends for Life</h3>
  
      <form @submit.prevent="submitSearch">
        <input v-model="searchTerm" type="text" placeholder="name or color or sex" />
        <button type="submit">Search</button>
      </form>
  
      <div class="Dog-Lists">
        
        <ul v-if="searchResults.length">
          <li v-for="dog in searchResults" :key="dog.id">
            <h2>{{ dog.name }}</h2>
            <p>{{ dog.color }}</p>
            <p>{{ dog.sex }}</p>
          </li>
        </ul>
        <div v-else>No Results found</div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from '../axios';
  
  export default {
    data() {
      return {
        searchTerm: '',
        searchResults: [],
      };
    },
    mounted() {
    // Call the method to fetch data when the component is mounted
    this.submitSearch();
  },
  methods: {
    async submitSearch(){
    try {
      const ax = axios.create({
  RESTAPI: "http://localhost:3000/api",
  headers:{ "Content-Type": "application/json"}
      
 })
          const response = await ax.get(`/dogs?query=${this.searchTerm}`);
          this.searchResults = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      // If you want to fetch data when the component is created, you can call fetchData in the created hook
      // created() {
      //   this.fetchData();
      // },
    },
  };
  </script>
  
  <style scoped>
  h3 {
    margin-left: 0;
  }
  
  form {
    margin-top: 300px;
  }
  
  .Search {
    color: steelblue;
    margin-left: 10px;
    font-size: 18px;
  }
  
  img {
    display: flex;
  }
  </style>
   -->
   <template>
    <div class="Search">
      <h2>Search For Puppies</h2>
  
      <!-- <img src="https://img.freepik.com/premium-vector/dog-cat-love-each-other-illustration_54454-5.jpg" style="width:100%" height="400px" /> -->
      <img src="https://i.insider.com/5d5c10eb4afbf902204e5f0b?width=1136&format=jpeg" style="width:100%" />
      <h3>Friends for Life</h3>
  
      <form @submit.prevent="submitSearch">
        <input v-model="searchTerm.name" type="text" placeholder="Name" />
        <input v-model="searchTerm.sex" type="text" placeholder="Sex" />
        <input v-model="searchTerm.birth_date" type="text" placeholder="Birth Date" />
   <!-- Your form content here -->
   <button type="button" @click="submitSearch">Search</button>
 
   

        <!-- <button @click="showAll" class="show-all-button">Show All</button> -->
      </form>
  
      <div class="Dog-Lists">
        <ul v-if="searchResults.length">
          <li v-for="dog in searchResults" :key="dog.id" class="Dog-Result">
            <h2>{{ dog.name }}</h2>
            <p>{{ dog.sex }}</p>
            <p>{{ formatDate(dog.birth_date) }}</p>
            <img :src="dog.image_url" alt="Dog Image"  class="Dog-Image"/>
          </li>
        </ul>
        <div v-else>No Results found</div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import api from '../axios';
  
  export default {
    data() {
      return {
        searchTerm: {
          name: '',
          sex: '',
          birth_date: '',
        },
        searchResults: [],
        allDogs: [],
      };
    },
    methods: {
      async submitSearch() {
    // Check if at least one search field is filled
   
    
     
        try {
          // Create a query string based on the filled fields
          const queryString = Object.entries(this.searchTerm)
           .filter(([key, value]) => value.trim() !== '')
            
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');
  
          // Make a GET request using the axios instance
          const response = await api.get(`/dogs?${queryString}`);
  
          // Update the searchResults with the received data
          this.searchResults = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
     


     
//       async showAll() {
//   try {
//     const response = await api.get('/dogs');
//     this.allDogs = response.data;

//     // Reset searchResults as you are now showing all dogs
//     this.searchResults = [];

//     // Iterate over the dogs
//     for (const dog of this.allDogs) {
//       console.log('Dog Name:', dog.name);
//       // Perform any other operations with the dog data
//     }
//   } catch (error) {
//     console.error('Error fetching all dogs data:', error);
//   }
// }

}
    }

  </script>
  
 
  <style scoped>
.Search {
  text-align: center;
  background-color: #f8f8f8;
  padding: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.image-container img {
  width: 150px;
  height: 150px;
  margin: 0 10px;
  border-radius: 50%;
}

.search-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: green;
}

h3{
  color: green;
}

button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
h3 {
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  color: #4caf50;
}


.Dog-Lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .Dog-Result {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    width: 400px; /* Adjust the width as needed */
    text-align: left;
    color:green;
  }

  .Dog-Result img {
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
  }



  .show-all-button {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px; /* Adjust margin as needed */
  }

  .show-all-button:hover {
    background-color: #2980b9;
  }

  /* Add this style for the Search button */
  button[type="submit"] {
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }
  h2{
    margin-top: -10px;
    color:green;
  }
</style>
