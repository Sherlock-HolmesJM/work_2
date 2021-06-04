import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Nav>
      <ul className='nav-ul'>
        <li className='nav-li' data-aos='fade-down'>
          <Link className='nav-link' to='/'>
            Logout
          </Link>
        </li>
      </ul>
      <div className='nav-name' data-aos='zoom-in' data-aos-delay='700'>
        <em>CV Management System</em>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #023e8a;
  width: 100%;
  height: 50px;
  padding: 20px;

  .nav-ul {
    display: flex;
    list-style-type: none;
    align-items: center;
  }
  .nav-li {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 3px 6px;
    border-radius: 6px;
    height: 30px;
    width: auto;
    margin-top: 15px;
  }
  .nav-link {
    color: red;
    text-decoration: none;
  }
  .nav-name {
    color: white;
    font-weight: 800;
    font-size: 18px;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;

export default NavBar;
