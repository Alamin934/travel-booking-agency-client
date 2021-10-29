import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddPlans from './Pages/Admin/AddPlans/AddPlans';
import ManageAllPlans from './Pages/Admin/ManageAllPlans/ManageAllPlans';
import MyPlans from './Pages/Admin/MyPlans/MyPlans';
import AllPlans from './Pages/AllTourPlans/AllPlans/AllPlans';
import SinglePlanDetail from './Pages/AllTourPlans/SinglePlanDetail/SinglePlanDetail';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Signin from './Pages/Signin/Signin';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/allPlans">
            <AllPlans />
          </Route>
          <Route path="/myPlans">
            <MyPlans />
          </Route>
          <Route path="/manageAllPlans">
            <ManageAllPlans />
          </Route>
          <PrivateRoute path="/singlePlanDetail/:id">
            <SinglePlanDetail></SinglePlanDetail>
          </PrivateRoute>
          <Route path="/addPlans">
            <AddPlans></AddPlans>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;