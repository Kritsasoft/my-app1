<template>
     <div>
         <h1>Planning</h1>
         <ul>
             <li v-for="plan in plans" :key="plan._id">
                <strong>{{ plan.destination.name }}</strong> - {{ new Date(plan.date).toLocaleDateString() }}
                 <p>Activities: {{ plan.activities.join(', ') }}</p>
             </li>
         </ul>
     </div>
 </template>
 
 <script>
 import axios from 'axios';
 
 export default {
     data() {
         return {
             plans: []
         };
     },
     created() {
         this.fetchPlans();
     },
     methods: {
         async fetchPlans() {
             try {
                 const response = await axios.get('http://localhost:3000/api/planning');
                 this.plans = response.data;
             } catch (error) {
                 console.error('Error fetching plans:', error);
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
 