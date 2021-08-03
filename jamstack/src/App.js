import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Auth from './Pages/Auth/Auth.js';
import Navbar from './Pages/Homepage/Navbar';
import Home from './Pages/Homepage/Home';
import All from './Pages/Homepage/All';
import Chairs from './Pages/Homepage/Chairs';
import Livingroom from './Pages/Homepage/Livingroom';
import Newarrivals from './Pages/Homepage/Newarrivals';
import Onsale from './Pages/Homepage/Onsale';
import Sofas from './Pages/Homepage/Sofas';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Switch>  
                <Switch>
                    <Route path="/home"  component={Home}/>
                    <Route path="/all"  component={All}/>
                    <Route path="/chairs"  component={Chairs}/>
                    <Route path="/livingroom"  component={Livingroom}/>
                    <Route path="/newarrivals"  component={Newarrivals}/>
                    <Route path="/onsale"  component={Onsale}/>
                    <Route path="/sofas"  component={Sofas}/>
                    <Route path="/auth"  component={Auth}/>
                </Switch>
            
        </Switch>
    </BrowserRouter>
  );
}
export default App;
