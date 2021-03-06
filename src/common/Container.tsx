import styled from 'styled-components';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

export interface ContProps {}

const Container: React.FC<ContProps> = (props) => {
  return (
    <Div>
      <div className='title'>
        <Link to='/' className='btn btn-danger btn-sm'>
          Logout
        </Link>
        <em className='title-hide'>
          Web-Based Teaching Practice Management System
        </em>
      </div>
      <div className='content'>
        <SideNav />
        <div>{props.children}</div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  min-height: 100vh;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    background: black;
    color: white;
    height: 40px;
    padding: 5px 4.2%;
    margin-bottom: 15px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 4%;
    flex-wrap: wrap;
  }

  .content > * {
    flex-grow: 1;
    flex-basis: calc(calc(500px - 100%) * 999);
  }

  @media screen and (max-width: 700px) {
    .title-hide {
      display: none;
    }
  }
`;

export default Container;
