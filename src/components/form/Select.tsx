import { ChangeEvent } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  value?: string;
  options: SelectOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = (props) => {
  const { value, options, onChange } = props;

  return (
    <select value={value} onChange={onChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
