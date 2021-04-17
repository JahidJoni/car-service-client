import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Customer from './Components/Customer/Customer';
import ServiceList from './Components/ServiceList/ServiceList';
import Reviews from './Components/Reviews/Reviews';
import AddService from './Components/AddService/AddService';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import ManageService from './Components/ManageService/ManageService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
export const PaymentContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, paymentSuccess, setPaymentSuccess]}>
    <Router>
    <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>

    <Route path="/login">
      <Login></Login>
    </Route>

    <PrivateRoute path="/order/:id">
      <Customer></Customer>
    </PrivateRoute>

    <PrivateRoute path="/customer/service-list">
      <ServiceList></ServiceList>
    </PrivateRoute>

    <PrivateRoute path="/customer/reviews">
      <Reviews></Reviews>
    </PrivateRoute>

    <PrivateRoute path="/admin/add-service">
      <AddService></AddService>
    </PrivateRoute>

    <PrivateRoute path="/admin/make-admin">
      <MakeAdmin></MakeAdmin>
    </PrivateRoute>

    <PrivateRoute path="/admin/manage-service">
      <ManageService></ManageService>
    </PrivateRoute>
  </Switch>
</Router>
</UserContext.Provider>
  );
}

export default App;
