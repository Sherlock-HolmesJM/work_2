import styled from 'styled-components';
import Header from '../common/Header';
import Container from '../common/Container';
import ChildContainer from '../common/ChildContainer';
import FormControl, { TextArea } from '../common/FormControl';
import FormGroup from '../common/FormGroup';
import { useState } from 'react';
import {toJSONFix} from '../utils/date';
import {confirmed as anime} from '../media';
import Lottie from 'lottie-react';

type State = {
  date: string;
  activity: string;
}

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];

interface FillActivityProps {}

const FillActivity: React.FC<FillActivityProps> = () => {

  const [state, setState] = useState<State[]>([]);
  const [today, setToday] = useState(new Date());
  let [week, setWeek] = useState(1);
  const [date, setDate] = useState(toJSONFix(today));
  const [anim, setAnim] = useState(false);

  function getElementById <T>(id: string) {
    return document.getElementById(id) as any as T
  }  

  const updateState = () => {
    // Get date, activity
    const date = getElementById<HTMLInputElement>('date').value;
    const activity = getElementById<HTMLTextAreaElement>('textArea').value;
    

    // create new object, update state
    if (date && activity) {
      setAnim(true);

      setTimeout(() => {
        setAnim(false);
        
        setState([...state, {date, activity}]);

        const tomorrow_milsec = today.getDay() === 5 ? today.getTime() +  (86_400_000 * 3) : today.getTime() +  86_400_000;
        
        setToday(new Date(tomorrow_milsec));

        setDate(toJSONFix(new Date(tomorrow_milsec)));

        if (today.getDay() === 5) setWeek(++week);

        getElementById<HTMLTextAreaElement>('textArea').value = '';
      
      }, 3500);
    }
  }
  

  return (
    <Container>

      <Div>
        <Header>Fill Activity</Header>

        <ChildContainer>
          {anim && <Lottie className='fill-act-anim' animationData={anime} />}

          <FormGroup>
            <h2 className='group-title'>
              <div>Week {week}</div>
              <div>{day[today.getDay()]}</div>
            </h2>
            <FormControl type='date' id='date' label='Date' value={date} onChange={(e) => setDate((e as any).target.value)} />
            <TextArea label='Events' id='textArea' />
          </FormGroup>

          <button onClick={updateState} className='btn btn-primary btn-sm mt-3'>Save changes</button>
        </ChildContainer>

      </Div>

    </Container>
  );
};

const Div = styled.div`
  flex-grow: 1;

  .fill-act-anim {
    position: absolute;
    top: 5%;
    left: 30%;
    width: 300px;
  }

  .group-title {
    display: flex;
    justify-content: space-between;
  }
`;

export default FillActivity;
