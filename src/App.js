import Accueil from './pages/Accueil'
import Game from './pages/Game'
import Ui from './pages/Ui'
import Cv from './pages/Cv';
import Contact from './pages/Contact'
import NotFound from './pages/NotFound' 
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import './styles/index.css'
import Navigation from './components/Navigation'
import NavigationLeft from "./components/NavigationLeft"
import Footer from './components/Footer'

function App() {
  return(
      <div className="container">
      
        <BrowserRouter>
        
      
          <Switch>
            <Route path="/" exact component= {Accueil} />
            <Route path="/game" exact component= {Game} />
            <Route path="/ui" exact component= {Ui} />
            <Route path="/cv" exact component= {Cv} />
            <Route path="/contact" exact component= {Contact} />
            <Route component={NotFound} />
          </Switch>
          
        </BrowserRouter>
      </div>

    
 
  
  );
}

export default App;

