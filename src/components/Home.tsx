import styled from 'styled-components';
import { heroImg } from '../media';
import { FcNfcSign } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

export interface HomeProps {}

type Inputs = {
  email: string;
  password: string;
};

const Home = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Div>
      <div className='home-hero-div'>
        <h2>Ready to submit your CV?</h2>
        <img src={heroImg} alt='hero img' className='home-hero-img' />
      </div>

      <div className='home-content-div'>
        <div className='home-form-div'>
          <form className='home-form' onSubmit={onSubmit}>
            <FcNfcSign className='home-form-icon' />
            <h1 className='h3 mb-3 fw-normal' style={{ color: 'white' }}>
              Please sign in
            </h1>

            <div className='form-floating'>
              <input
                type='email'
                id='email'
                className='form-control'
                placeholder='name@example.com'
                {...register('email', { required: true })}
              />
              <label htmlFor='email'>Email address</label>
            </div>

            <div className='form-floating'>
              <input
                type='password'
                id='password'
                className='form-control'
                placeholder='Password'
                {...register('password', { required: true, minLength: 3 })}
              />
              <label htmlFor='password'>Password</label>
            </div>

            <button className='m-4 w-100 btn btn-lg btn-primary' type='submit'>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  background: linear-gradient(
    148deg,
    hsla(190, 77%, 88%, 1) 8%,
    hsla(239, 94%, 19%, 1) 41%,
    hsla(190, 100%, 42%, 1) 95%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#CAF0F8", endColorstr="#90E0EF", GradientType=1 );

  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;

  && > * {
    flex-basis: calc(calc(600px - 100%) * 999);
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .home-hero-div {
    gap: 5rem;
  }
  .home-hero-img {
    width: max(300px, 70%);
  }

  .home-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
  .home-form-icon {
    width: 100px;
    height: 100px;
  }
  .form-floating {
    width: 100%;
  }

  @media screen and (max-width: 599px) {
    .home-hero-div {
      display: none;
    }
  }
`;

export default Home;
