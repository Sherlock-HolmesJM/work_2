import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 10px;
  background-color: #94d2bd;
  padding: 5px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
`;

export default CardContainer;
