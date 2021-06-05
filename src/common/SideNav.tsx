import styled from 'styled-components';
import Header from './Header';
import { Link } from 'react-router-dom';

export interface SideNavProps {}

const SideNav: React.FC<SideNavProps> = () => {
  const items = [
    ['#', '', 'View Activity'],
    ['/fill_activity', '', 'Fill Activity'],
    ['#', '', 'Report Sheet'],
    ['/principal_rating', '', "Principal's Rating"],
    ['/profile', '', 'My Profile'],
    ['#', '', 'Supervisor/Coordinator'],
    ['#', '', 'Notice Board'],
    ['#', '', 'Messages'],
  ];

  return (
    <Div>
      <Header>Dashboard</Header>
      <ul className='list-group'>
        {items.map(([link, , title]) => (
          <li key={title} className='list-group-item list-group-item-action'>
            <Link to={link} className='ul-link'>
              <div></div>
              <div>{title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Div>
  );
};

const Div = styled.div`
  max-width: max(300px, 15vw);

  ul {
    list-style-type: none;
    margin-top: 0;
  }

  .ul-link {
    display: flex;
    text-decoration: none;
    color: black;
  }
`;

export default SideNav;
