import styled from 'styled-components';
import Header from '../common/Header';
import Container from '../common/Container';
import ChildContainer from '../common/ChildContainer';
import FormControl, { TextArea } from '../common/FormControl';
import FormGroup from '../common/FormGroup';

export interface FillActivityProps {}

const FillActivity: React.FC<FillActivityProps> = () => {
  return (
    <Container>
      <Div>
        <Header>Fill Activity</Header>
        <ChildContainer>
          <FormGroup>
            <h2 className='group-title'>Week 1</h2>
            <FormControl type='date' id='date' label='Date' />
            <TextArea label='Events' />
          </FormGroup>
          <button className='btn btn-primary btn-sm'>Save changes</button>
        </ChildContainer>
      </Div>
    </Container>
  );
};

const Div = styled.div`
  flex-grow: 1;
`;

export default FillActivity;
