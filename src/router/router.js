import {createWebHistory, createRouter} from 'vue-router';
import Login from '../views/LoginView.vue';
import Home from '../views/HomeView.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Register from '../views/RegisterView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/home/:username',
            name: 'Home',
            component: Home,
        },
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        }
    ],
});
