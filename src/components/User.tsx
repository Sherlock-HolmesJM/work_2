import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Lottie from 'lottie-react';
import { sending } from '../media';
import { dummydata } from '../utils/data';

export interface Props {}

type Inputs = {
  files: FileList;
};

const User = () => {
  const [cards, setCards] = useState(dummydata);
  const { register, watch } = useForm<Inputs>();
  const [loader, setLoader] = useState(false);

  watch(({ files }) => {
    if (files.length === 0) return;

    setLoader(true);

    setTimeout(() => {
      setLoader(false);

      const name = files[0].name;
      const fileExist = cards.some((card) => card.name === name);
      if (!fileExist) setCards([{ name, status: 'sent' }, ...cards]);
    }, 4100);
  });

  const removeCard = (name: string) => {
    const list = cards.filter((card) => card.name !== name);
    setCards(list);
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
        {loader && (
          <Lottie
            className='user-loader'
            animationData={sending}
            loop={false}
          />
        )}

        <div className='user-title-container'>
          <h2>My CVs</h2>
        </div>
        <div className='user-cv-card-container' id='user-cv-cards'>
          {cards.map(({ name, status }, ind) => (
            <div
              className='user-cv-card'
              key={ind}
              data-aos='zoom-in'
              data-aos-delay={(cards.length - ind) * 100}
            >
              <h5 className='user-cv-card-title'>{name}</h5>

              <span>{status}</span>

              <div className='user-cv-card-buttons btn-group'>
                <button className='user-cv-card-button btn btn-primary'>
                  Update
                </button>
                <button
                  className='user-cv-card-button btn btn-danger'
                  onClick={() => removeCard(name)}
                >
                  Remove
                </button>
              </div>
            </div>
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
};

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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: max(64%, 430px);
    min-height: 300px;
    max-height: 520px;
    border: 2px solid #c7c0c0;
    background: #0a9396;
    border-radius: 15px;
    border-bottom: 6px solid gray;
  }

  .user-cv-card-container {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 8px;
    background-color: white;
    min-width: 97%;
    padding: 5px;
    overflow: auto;
  }
  .user-cv-card {
    flex-basis: calc(calc(600px - 100%) * 999);
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 7px;
    background: #94d2bd;
    padding: 8px;
  }
  .user-loader {
    position: absolute;
    width: 300px;
    z-index: 111;
  }
  .user-cv-card-title {
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 250px;
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
      max-height: 800px;
    }
  }
`;

export default User;
