<template>
     <div>
         <h1>Booking</h1>
         <ul>
             <li v-for="booking in bookings" :key="booking._id">
                <strong>{{ booking.destination.name }}</strong> - {{ formattedDate(booking.date) }}
                 <p>User: {{ booking.user }} - Status: {{ booking.status }}</p>
             </li>
         </ul>
     </div>
 </template>
 
 <script>
 import axios from 'axios';
 
 export default {
     data() {
         return {
             bookings: []
         };
     },
     created() {
         this.fetchBookings();
     },
     methods: {
         async fetchBookings() {
             try {
                 const response = await axios.get('http://localhost:3000/api/booking');
                 this.bookings = response.data;
             } catch (error) {
                 console.error('Error fetching bookings:', error);
             }
         }
     },
     filters: {
         formatDate(value) {
             const date = new Date(value);
             return date.toDateString();
         }
     }
 };
 </script>
 