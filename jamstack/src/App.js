import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './Pages/Auth/Auth.js';

function App() {
  return (
    <BrowserRouter>
    <Route path="/Auth" exact component={Auth}/>    
    </BrowserRouter>
  );
}

export default App;
