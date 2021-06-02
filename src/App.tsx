import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import UserLogin from './components/UserLogin';
import User from './components/User';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';

function App() {
  AOS.init({
    duration: 1000,
    once: true,
  });

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
