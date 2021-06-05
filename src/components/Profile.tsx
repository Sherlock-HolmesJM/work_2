import styled from 'styled-components';
import Header from '../common/Header';
import Container from '../common/Container';
import ChildContainer from '../common/ChildContainer';
import FormGroup from '../common/FormGroup';
import FormControl, { Select } from '../common/FormControl';
import { FcManager } from 'react-icons/fc';

export interface PageProps {}

const Profile: React.FC<PageProps> = (props) => {
  return (
    <Container>
      <Div>
        <Header>Profile</Header>
        <ChildContainer>
          <div className='item item-image'>
            <div className='item-image-div'>
              {/* <img src={heroImg} alt='hh'  /> */}
              <FcManager className='item-image-img' />
            </div>
            <button className='btn btn-primary btn-sm'>Save image</button>
          </div>
          <FormGroup>
            <FormControl
              type='text'
              placeholder='Stanley'
              id='firstname'
              label='First Name'
            />
            <FormControl
              type='text'
              placeholder='James'
              id='middlename'
              label='Middle Name'
            />
            <FormControl
              type='text'
              placeholder='Buggery'
              id='lastname'
              label='Last Name'
            />
            <Select id='gender' items={['male', 'female']} label='Gender' />

            <FormControl type='date' id='dob' label='Date of Birth' />
            <FormControl
              type='text'
              placeholder='2020/2021'
              id='session'
              label='Session'
            />
          </FormGroup>

          <FormGroup>
            <div className='group-title'>Contact Info</div>
            <FormControl
              type='text'
              placeholder='Vocational'
              id='department'
              label='Department'
            />
            <FormControl
              type='text'
              label='Unit'
              placeholder='Computer'
              id='unit'
            />
            <FormControl
              type='text'
              label='Address'
              placeholder='No. 5 Goldie Street'
              id='address'
            />
            <FormControl
              type='email'
              label='Email address'
              placeholder='james@gmail.com'
              id='email'
            />
            <Select
              id='level'
              items={['100', '200', '300', '400']}
              label='Level'
            />
            <FormControl
              type='number'
              label='Phone'
              placeholder='09082649834'
              id='phone'
            />
          </FormGroup>
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
    width: 88px;
    height: 80px;
  }
  .item-image-img {
    width: 100%;
    height: 100%;
  }
  .item-image-img:hover {
    cursor: pointer;
  }
`;

export default Profile;
