import { ChangeEvent } from 'react';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  name: string;
  value: string | number;
  error: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const { label, error, onChange, ...rest } = props;

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input {...rest} onChange={onChange} />

      {error && <p className='errorField'>{error}</p>}
    </>
  );
};
