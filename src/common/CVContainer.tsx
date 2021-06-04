import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 520px;
  width: min(845px, 90%);
  background: #0a9396;
  border-radius: 15px;
  padding: 5px;

  @media screen and (max-width: 700px) {
    height: 700px;
  }
`;

export default Container;
