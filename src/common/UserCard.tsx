import styled from 'styled-components';

export interface UserCardI {
  id: number;
  status: string;
  name: string;
}

export interface UserCardProps {
  data: UserCardI;
  length: number;
  index: number;
  onRemove: (name: string) => void;
}

const UserCard: React.FC<UserCardProps> = (props) => {
  const { name, status } = props.data;
  const { length, index, onRemove } = props;

  return (
    <Div data-aos='zoom-in' data-aos-delay={(length - index) * 100}>
      <h5 className='card-title'>{name}</h5>

      <span className='card-status'>
        <em>{status}</em>
      </span>

      <div className='card-buttons btn-group'>
        <button className='card-button btn btn-primary'>Update</button>
        <button
          className='card-button btn btn-danger'
          onClick={() => onRemove(name)}
        >
          Remove
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

export default UserCard;
