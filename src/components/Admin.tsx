import { Component } from 'react';
import styled from 'styled-components';
import { dummydata } from '../utils/data';
import AdminCard from '../common/AdminCard';
import Loader from '../common/Loader';
import { UserCardI } from '../common/UserCard';
import { confirmed } from '../media';
import EmptyDiv from '../common/EmptyDiv';
import CardContainer from '../common/CardContainer';
import CVContainer from '../common/CVContainer';
import NavBar from '../common/NavBar';

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
        <NavBar />

        <CVContainer style={{ background: '#1d3557' }}>
          {loader && <Loader data={confirmed} />}

          <div style={{ color: 'white' }}>
            <h2>Submitted CVs</h2>
          </div>

          <CardContainer style={{ background: '#457b9d' }}>
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
`;

export default Admin;
