import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Switch, Route } from 'react-router-dom';
import Profile from './components/Profile';
import FillActivity from './components/FillActivity';
import PrincipalRating from './components/PrincipalRating';
import Login from './components/Login';
import styled from 'styled-components';

function App() {
  AOS.init({
    duration: 1000,
    once: true,
  });

  return (
    <Div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/principal_rating' component={PrincipalRating} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/fill_activity' component={FillActivity} />
      </Switch>
    </Div>
  );
}

const Div = styled.div`
  min-width: 320px;
  background: #0a9396;

  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export default App;
