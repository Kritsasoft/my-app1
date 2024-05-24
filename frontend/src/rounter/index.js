import Vue from 'vue';
import Router from 'vue-router';
import Destinations from '../components/destinatoinpage.vue';
import Planning from '../components/planingpage.vue';
import Booking from '../components/bookingpage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Destinations },
        { path: '/planning', component: Planning },
        { path: '/booking', component: Booking }
    ]
});
