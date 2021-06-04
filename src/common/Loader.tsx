import Lottie from 'lottie-react';
import styled from 'styled-components';
import { sending } from '../media';

export interface LoaderProps {
  data?: any;
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { data } = props;

  return (
    <Div>
      <Lottie
        className='user-loader'
        animationData={data ?? sending}
        loop={false}
      />
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  width: 300px;
  z-index: 111;
  .user-loader {
    width: 100%;
  }
`;

export default Loader;
