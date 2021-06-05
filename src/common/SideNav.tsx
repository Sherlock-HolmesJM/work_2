import styled from 'styled-components';
import Header from './Header';

export interface SideNavProps {}

const SideNav: React.FC<SideNavProps> = () => {
  const items = [
    ['#', '', 'View Activity'],
    ['#', '', 'Fill Activity'],
    ['#', '', 'Report Sheet'],
    ['#', '', "Principal's Rating"],
    ['#', '', 'My Profile'],
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
            <a href={link} className='ul-link'>
              <div></div>
              <div>{title}</div>
            </a>
          </li>
        ))}
      </ul>
    </Div>
  );
};

const Div = styled.div`
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
