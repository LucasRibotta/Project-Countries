import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/Landing/LandingPage'
import Home from './components/Home/Home';
import CreateActivity from "./components/FormActivity/CreateActivity" 
import Detail from './components/DetailCountry/DetailCountry'
import './App.css';


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Switch>
       <Route exact path= '/' component={LandingPage} />
       <Route path = '/home' component={Home} />

       <Route path = '/create' component={CreateActivity} />  
       <Route path="/detail/:id" component={Detail} />
       
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
