import styled from 'styled-components';
import { UserCardI } from './UserCard';

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

const Div = styled.div`
  flex-basis: calc(calc(600px - 100%) * 999);
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 7px;
  background: #005f73;
  color: white;
  padding: 8px;

  .card-title {
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 250px;
  }
  .card-status {
    text-transform: capitalize;
  }
`;

export default AdminCard;
