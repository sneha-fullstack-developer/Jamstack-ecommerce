import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './Pages/Auth/Auth.js';
import Home from './Pages/Homepage/Home';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact component={Auth}/>  
    <Route path="/home" component={Home}/>  
    </BrowserRouter>
  );
}

export default App;
