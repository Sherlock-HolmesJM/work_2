import { Card } from './Card';

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
    <Card data-aos='zoom-in' data-aos-delay={(length - index) * 100}>
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
    </Card>
  );
};

export default UserCard;
