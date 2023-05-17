import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/Landing/LandingPage'
import Home from './components/Home/Home';
import CreateActivity from "./components/FormActivity/CreateActivity" 
/* import Detail from './components/DetailCountry/Detail' */
import './App.css';


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
       <Route exact path= '/' component={LandingPage} />
       <Route path = '/home' component={Home} />
       <Route path = '/create' component={CreateActivity} />  
       {/* <Route path='/home/:id' component={Detail}/> */}
       
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
