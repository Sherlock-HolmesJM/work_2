import styled from 'styled-components';

const Card = styled.div`
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

export { Card };
