import styled from 'styled-components';

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;

  .group-title {
    flex-basis: 100%;
    text-align: left;
    font-weight: 750;
    border-bottom: 1px dotted gray;
  }
`;

export default Group;
