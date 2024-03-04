import { ChangeEvent } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  value: string;
  name: string;
  options: SelectOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = (props) => {
  const { value, name, options, onChange } = props;

  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
