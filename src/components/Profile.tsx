import styled from 'styled-components';
import Header from '../common/Header';
import SideNav from '../common/SideNav';
import Container from '../common/Container';
import ChildContainer from '../common/ChildContainer';
import { heroImg } from '../media';

export interface PageProps {}

const Profile: React.FC<PageProps> = (props) => {
  return (
    <Container>
      <SideNav />

      <Div>
        <Header>Profile</Header>
        <ChildContainer>
          <div className='item item-image'>
            <div className='item-image-div'>
              <img src={heroImg} alt='hh' className='item-image-img' />
            </div>
            <button className='btn btn-primary btn-sm'>Save image</button>
          </div>
        </ChildContainer>
      </Div>
    </Container>
  );
};

const Div = styled.div`
  flex-grow: 1;

  .item-image {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 13px;
  }
  .item-image-div {
    border: 1px solid gray;
    border-radius: 5px;
  }
  .item-image-img {
    width: 86px;
  }
`;

export default Profile;
