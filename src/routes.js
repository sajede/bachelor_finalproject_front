import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import Forget from "./components/Register/Forget";

import User from "./components/User/User";
import UserNewCase from "./components/User/NewCase";
import UserListCase from "./components/User/ListCase";
import UserProfile from "./components/User/Profile";
import UserSeeCase from "./components/User/SeeCase";
import UserPackags from "./components/User/Packages";

import Admin from "./components/Admin/Admin";
import AdminPackages from "./components/Admin/Packages";
import AdminNewPack from "./components/Admin/NewPack";
import AdminListCase from "./components/Admin/ListCase";
import AdminSeeCase from "./components/Admin/SeeCase";


export const routes = [
  { path: '', component: Home},
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/forget', component: Forget},
  { path: '/user', component: User, children:[
      { path: '', component: UserProfile},
      { path: 'new', component: UserNewCase},
      { path: 'list/:page', component: UserListCase},
      { path: 'case/:id', component: UserSeeCase},
      { path: 'packs', component: UserPackags},
    ]},
  { path: '/admin', component: Admin, children:[
      { path: '', component: AdminPackages},
      { path: 'new', component: AdminNewPack},
      { path: 'list/:page', component: AdminListCase},
      { path: 'case/:id', component: AdminSeeCase},
    ]},
  { path: '*', redirect: '/'}
];
