import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AllPlans from './Pages/AllTourPlans/AllPlans/AllPlans';
import SinglePlanDetail from './Pages/AllTourPlans/SinglePlanDetail/SinglePlanDetail';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
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
          {/* <Route path="/plans/:id"> */}
          <Route path="/singlePlanDetail">
            <SinglePlanDetail></SinglePlanDetail>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;