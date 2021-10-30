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
import NotFound from './Pages/NotFound/NotFound';

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
          <PrivateRoute path="/myPlans">
            <MyPlans />
          </PrivateRoute>
          <PrivateRoute path="/manageAllPlans">
            <ManageAllPlans />
          </PrivateRoute>
          <PrivateRoute path="/singlePlanDetail/:id">
            <SinglePlanDetail></SinglePlanDetail>
          </PrivateRoute>
          <PrivateRoute path="/addPlans">
            <AddPlans></AddPlans>
          </PrivateRoute>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;