import styled from 'styled-components';
import { UserCardI } from './UserCard';
import { Card } from './Card';

export interface Props {
  data: UserCardI;
  length: number;
  index: number;
  onConfirm: (data: UserCardI) => void;
}

const AdminCard: React.FC<Props> = (props) => {
  const { length, index, onConfirm, data } = props;
  const { name, status } = data;

  return (
    <Div data-aos='zoom-in' data-aos-delay={(length - index) * 100}>
      <h5 className='card-title'>{name}</h5>

      <span className='card-status'>
        <em>{status}</em>
      </span>

      <div className='card-buttons btn-group'>
        <button className='card-button btn btn-primary'>View</button>
        <button
          className='card-button btn btn-warning'
          onClick={() => onConfirm(data)}
        >
          {status === 'confirmed' ? 'Unconfirm' : 'Confirm'}
        </button>
      </div>
    </Div>
  );
};

const Div = styled(Card)`
  background: #a8dadc;
  color: black;
`;

export default AdminCard;
