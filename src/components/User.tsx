import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { dummydata, getID } from '../utils/data';
import UserCard from '../common/UserCard';
import Loader from '../common/Loader';
import EmptyDiv from '../common/EmptyDiv';
import CardContainer from '../common/CardContainer';
import CVContainer from '../common/CVContainer';

type Inputs = {
  files: FileList;
};

function User() {
  const { register, watch } = useForm<Inputs>();
  const [state, setState] = useState({ cards: dummydata, loader: false });
  const { cards, loader } = state;

  watch(({ files }) => {
    if (files.length === 0) return;

    const name = files[0].name.toLowerCase();
    const fileExist = cards.some((card) => card.name === name);

    if (fileExist) return;

    setState({ ...state, loader: true });

    setTimeout(() => {
      const id = getID();
      setState({
        cards: [{ id, name, status: 'sent' }, ...cards],
        loader: false,
      });
    }, 4100);
  });

  const removeCard = (name: string) => {
    const list = cards.filter((card) => card.name !== name);
    setState({ ...state, cards: list });
  };

  return (
    <Div>
      <nav className='user-nav'>
        <ul className='user-nav-ul'>
          <li className='user-nav-li' data-aos='fade-left'>
            <Link className='user-nav-link' to='/'>
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      <CVContainer>
        {loader && <Loader />}

        <div className='user-title-container'>
          <h2>My CVs</h2>
        </div>
        <CardContainer>
          {cards.length === 0 && (
            <EmptyDiv>
              <div>NO CV TO SHOW</div>
            </EmptyDiv>
          )}
          {cards.map((card, ind) => (
            <UserCard
              key={card.id}
              data={card}
              index={ind}
              length={cards.length}
              onRemove={removeCard}
            />
          ))}
        </CardContainer>
        <div className='user-cv-buttons'>
          <form>
            <input
              type='file'
              {...register('files')}
              className='user-cv-add btn btn-primary'
            />
          </form>
        </div>
      </CVContainer>
    </Div>
  );
}

const Div = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .user-nav {
    display: flex;
    align-items: center;
    background-color: #023e8a;
    width: 100%;
  }
  .user-nav-ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    transform: translateY(25%) translateX(30%);
  }
  .user-nav-li {
    background: white;
    padding: 3px 6px;
    border-radius: 6px;
  }
  .user-nav-link {
    color: red;
    text-decoration: none;
  }

  .user-cv-add {
    width: 80%;
  }
  .user-cv-buttons {
    display: flex;
    justify-content: center;
    margin: 8px;
  }
`;

export default User;
