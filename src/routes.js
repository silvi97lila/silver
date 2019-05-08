import Home from './components/Home.vue';
import Login from './components/Login.vue';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/contact', component: Contact },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard }

];

export default routes;