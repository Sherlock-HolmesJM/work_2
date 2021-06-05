import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  // AOS.init({
  //   duration: 1000,
  //   once: true,
  // });

  return (
    <div className='App'>
      <Switch>
        {/* <Route exact path='/' component={UserLogin} /> */}
        <Route exact path='/profile' component={Profile} />
        {/* <Route exact path='/admin' component={Admin} /> */}
      </Switch>
    </div>
  );
}

export default App;
