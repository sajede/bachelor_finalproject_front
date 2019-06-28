import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import Forget from "./components/Register/Forget";
import User from "./components/User/User";
import NewCase from "./components/User/NewCase";
import ListCase from "./components/User/ListCase";
import Profile from "./components/User/Profile";
import SeeCase from "./components/User/SeeCase";
import Refer from "./components/User/Refer";

export const routes = [
  { path: '', component: Home},
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/forget', component: Forget},
  { path: '/user', component: User, children:[
      { path: '', component: Profile},
      { path: 'newcase', component: NewCase},
      { path: 'list/:page', component: ListCase},
      { path: 'case/:id', component: SeeCase},
      { path: 'refer/:id', component: Refer}
    ]},
  { path: '*', redirect: '/'}
];
