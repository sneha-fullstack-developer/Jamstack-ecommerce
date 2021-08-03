import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './Pages/Auth/Auth.js';
import Navbar from './Pages/Homepage/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Route path="/auth" exact component={Auth}/>    
    <Route path="/" exact component={Navbar}/>
    </BrowserRouter>
  );
}

export default App;
