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
        <em>Web-Based Teaching Practice Management System</em>
      </div>
      <div className='content'>
        <SideNav />
        {props.children}
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
    padding: 5px 80px;
    margin-bottom: 15px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 80px;
  }
`;

export default Container;
