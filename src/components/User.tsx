import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { dummydata, getID } from '../utils/data';
import UserCard from './common/UserCard';
import Loader from './common/Loader';

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

      <div className='user-cv-container'>
        {loader && <Loader />}

        <div className='user-title-container'>
          <h2>My CVs</h2>
        </div>
        <div className='user-cv-card-container' id='user-cv-cards'>
          {cards.map((card, ind) => (
            <UserCard
              data={card}
              index={ind}
              length={cards.length}
              onRemove={removeCard}
            />
          ))}
        </div>
        <div className='user-cv-buttons'>
          <form>
            <input
              type='file'
              {...register('files')}
              className='user-cv-add btn btn-primary'
            />
          </form>
        </div>
      </div>
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

  .user-cv-container {
    width: max(calc(calc(500 - 100%) * 999), 64%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    height: 520px;
    width: min(880px, 90%);
    border: 2px solid #c7c0c0;
    background: #0a9396;
    border-radius: 15px;
    border-bottom: 6px solid gray;
  }

  .user-cv-card-container {
    width: 98%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    gap: 10px;
    background-color: #94d2bd;
    padding: 5px;
    overflow: auto;
  }

  .user-cv-add {
    width: 80%;
  }
  .user-cv-buttons {
    display: flex;
    justify-content: center;
    margin: 8px;
  }

  @media screen and (max-width: 700px) {
    .user-cv-container {
      height: 700px;
    }
  }
`;

export default User;
