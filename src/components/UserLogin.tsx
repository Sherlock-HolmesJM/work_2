import styled from 'styled-components';
import { heroImg } from '../media';
import { FcNfcSign } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { withRouter, RouterProps } from 'react-router-dom';

export interface HomeProps extends RouterProps {}

type Inputs = {
  email: string;
  password: string;
};

const Home = (props: HomeProps) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => {
    props.history.replace('/user');
  });

  return (
    <Div>
      <div className='home-hero-div'>
        <h2
          data-aos='fade-right'
          data-aos-duration={1500}
          data-aos-delay={1000}
        >
          Ready to submit your CV?
        </h2>
        <img
          src={heroImg}
          alt='hero img'
          className='home-hero-img'
          data-aos='fade-left'
          data-aos-duration={2000}
          data-aos-delay={1300}
        />
      </div>

      <div className='home-content-div'>
        <div className='home-form-div'>
          <form
            className='home-form'
            onSubmit={onSubmit}
            data-aos='fade'
            data-aos-delay={500}
            data-aos-duration={1500}
          >
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

export default withRouter(Home);
