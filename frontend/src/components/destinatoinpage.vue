<template>
     <div>
         <h1>Destinations</h1>
         <ul>
             <li v-for="destination in destinations" :key="destination._id">
                 <strong>{{ destination.name }}</strong> - {{ destination.type }}
                 <p>{{ destination.description }}</p>
             </li>
         </ul>
     </div>
 </template>
 
 <script>
 import axios from 'axios';
 
 export default {
     data() {
         return {
             destinations: []
         };
     },
     created() {
         this.fetchDestinations();
     },
     methods: {
         async fetchDestinations() {
             try {
                 const response = await axios.get('http://localhost:3000/api/destinations');
                 this.destinations = response.data;
             } catch (error) {
                 console.error('Error fetching destinations:', error);
             }
         }
     }
 };
 </script>
 