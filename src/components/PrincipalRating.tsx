import styled from 'styled-components';
import Header from '../common/Header';
import Container from '../common/Container';
import ChildContainer from '../common/ChildContainer';

export interface RatingProps {}

const Rating: React.FC<RatingProps> = () => {
  const items = [
    'Punctuality',
    'Attendance in class',
    'Obedience',
    'Participation in school activities',
    'Interpersonal relationship',
    'Teaching competency',
    'Creativity',
    'Honesty',
    'Dressing',
    'Communication skills',
  ];

  return (
    <Container>
      <Div>
        <Header>Report for 17/ED/VE/9999</Header>
        <ChildContainer>
          <div className='table-container'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>ITEM</th>
                  <th scope='col'>EXCELLECT</th>
                  <th scope='col'>SATISFACTORY</th>
                  <th scope='col'>POOR</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td key={index}>
                      {++index}. {item}
                    </td>
                    <td>
                      <input
                        type='radio'
                        name={`check${index}`}
                        className='form-check-input'
                      />
                    </td>
                    <td>
                      <input
                        type='radio'
                        name={`check${index}`}
                        className='form-check-input'
                      />
                    </td>
                    <td>
                      <input
                        type='radio'
                        name={`check${index}`}
                        className='form-check-input'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className='btn btn-primary btn-sm'>Submit rating</button>
        </ChildContainer>
      </Div>
    </Container>
  );
};

const Div = styled.div`
  flex-grow: 1;

  .table-container {
    min-width: 480px;
    overflow: auto;
  }
`;

export default Rating;
