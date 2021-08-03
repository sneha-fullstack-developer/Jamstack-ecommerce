import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './Pages/Auth/Auth.js';
import Navbar from './Pages/Homepage/Navbar';

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Route path="/auth" exact component={Auth}/>    
    <Route path="/" exact component={Navbar}/>
=======
    <Route path="/" exact component={Auth}/>    
>>>>>>> 1d88b2dd5037818bd76e8b8f9bd3c20a66ef5870
    </BrowserRouter>
  );
}

export default App;
