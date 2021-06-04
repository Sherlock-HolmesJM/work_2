import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dummydata } from '../utils/data';
import AdminCard from '../common/AdminCard';
import Loader from '../common/Loader';
import { UserCardI } from '../common/UserCard';
import { confirmed } from '../media';
import EmptyDiv from '../common/EmptyDiv';
import CardContainer from '../common/CardContainer';
import CVContainer from '../common/CVContainer';

const modData = dummydata.map((data) => ({ ...data, status: 'unconfirmed' }));
modData[2] = { ...modData[0], status: 'confirmed' };

export interface AdminProps {}

export interface AdminState {
  cards: UserCardI[];
  loader: boolean;
}

class Admin extends Component<AdminProps, AdminState> {
  state = {} as AdminState;

  constructor() {
    super({});
    this.state = { cards: modData, loader: false };
  }

  viewCard = () => {};

  confirmCard = (card: UserCardI) => {
    const { cards } = this.state;

    const index = cards.indexOf(card);

    if (index === -1) return;

    this.setState({ ...this.state, loader: true });

    const list = [...cards];
    list[index] = {
      ...card,
      status: card.status === 'confirmed' ? 'unconfirmed' : 'confirmed',
    };

    setTimeout(() => {
      this.setState({ cards: list, loader: false });
    }, 3500);
  };

  render() {
    const { cards, loader } = this.state;
    const { confirmCard } = this;

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
          {loader && <Loader data={confirmed} />}

          <div className='user-title-container'>
            <h2>Submitted CVs</h2>
          </div>

          <CardContainer id='user-cv-cards'>
            {cards.length === 0 && (
              <EmptyDiv>
                <div>NO CV TO SHOW</div>
              </EmptyDiv>
            )}
            {cards.map((card, ind) => (
              <AdminCard
                key={card.id}
                data={card}
                index={ind}
                length={cards.length}
                onConfirm={confirmCard}
              />
            ))}
          </CardContainer>
        </CVContainer>
      </Div>
    );
  }
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
`;

export default Admin;
