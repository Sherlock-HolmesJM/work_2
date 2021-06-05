import styled from 'styled-components';

export interface ControlProps {
  type: string;
  placeholder?: string;
  label: string;
  id: string;
}

const Control: React.SFC<ControlProps> = (props) => {
  const { type, label, placeholder, id } = props;

  return (
    <Div className='mb-3'>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <input
        type={type}
        className='form-control'
        id={id}
        placeholder={placeholder}
      />
    </Div>
  );
};

interface SelectProps {
  label: string;
  id: string;
  items: string[];
}

const Select = (props: SelectProps) => {
  const { label, id, items } = props;

  return (
    <Div>
      <label htmlFor={id} className='form-label'>
        {label}
      </label>
      <select id={id} className='form-select'>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </Div>
  );
};

interface TextAreaProps {
  id?: string;
  label: string;
}

const TextArea = (props: TextAreaProps) => {
  const { label } = props;
  return (
    <TA>
      <label htmlFor={''} className='form-label'>
        {label}
      </label>
      <textarea rows={4} className='form-control'></textarea>
    </TA>
  );
};

const Div = styled.div`
  flex-grow: 1;
  flex-basis: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .form-select {
    text-transform: capitalize;
  }
`;

const TA = styled(Div)`
  flex-basis: 600px;
`;

export { Select, TextArea };
export default Control;
