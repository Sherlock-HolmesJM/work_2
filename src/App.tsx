import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
