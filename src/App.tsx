import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserLogin from './components/UserLogin';
import User from './components/User';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={UserLogin} />
        <Route exact path='/user' component={User} />
      </Switch>
    </div>
  );
}

export default App;
