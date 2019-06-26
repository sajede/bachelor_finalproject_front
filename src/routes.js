import Home from './components/home/Home.vue';

import Login from './components/register/Login.vue';
import Register from './components/register/Register.vue';
import ForgetPassword from "./components/register/ForgetPassword";

import User from './components/user/User.vue';
import Edit from './components/user/Edit.vue';
import UserAllOrders from './components/user/AllOrders.vue';
import Help from './components/user/Help.vue';
import NewOrder from './components/user/NewOrder.vue';
import UserOrder from './components/user/Order.vue';

import Admin from './components/admin/Admin.vue';
import AdminAllOrders from './components/admin/AllOrders.vue';
import NewOrders from './components/admin/NewOrders.vue';
import Response from './components/admin/Response.vue';
import AdminOrder from './components/admin/Order.vue';

export const routes = [
  { path: '', component: Home},
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path: '/forget', component: ForgetPassword},
  { path: '/user', component: User, children:[
      { path: '', component: Edit},
      { path: 'new', component: NewOrder},
      { path: 'all', component: UserAllOrders},
      { path: ':id/order', component: UserOrder},
      { path: 'help', component: Help}
    ]},
  { path: '/admin', component: Admin, children:[
      { path: '', component: NewOrders},
      { path: 'all', component: AdminAllOrders},
      { path: ':id/order', component: AdminOrder},
      { path: ':id/response', component: Response},
    ]},
];
