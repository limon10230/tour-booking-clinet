import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About/About';
import AddService from './components/AddService/AddService';
import Appointment from './components/Appointment/Appointment';
import Contact from './components/Contact/Contact';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageService from './components/ManageService/ManageService';
import MyOrders from './components/MyOrders/MyOrders';

import NotFound from './components/NotFound/NotFound'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import Signin from './components/Signin/Signin';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <Route path="/manageService">
              <ManageService></ManageService>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/appointment/:serviceId">
              <Appointment></Appointment>
            </PrivateRoute>
            {/* <Route path="/addService">
              <AddService></AddService>
            </Route> */}

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>




    </div>
  );
}

export default App;
