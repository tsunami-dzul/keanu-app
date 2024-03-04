import { useState } from 'react';
import { Input } from '../../components/form/Input';
import { Select } from '../../components/form/Select';
import { Button } from '../../components/ui/Button';
import { grayOptions, typeOptions } from '../../data/keanuOptions';
import { gql } from 'graphql-request';
import { formValidation } from '../../helpers/formValidation';
import { IPictureSize } from '../../interfaces/IPictureSize';

interface FiltersProps {
  onFilter: (query: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({ onFilter }) => {
  const [formFilters, setFormFilters] = useState<IPictureSize>({
    width: 200,
    height: 200,
  });
  const [dropDownFilters, setDropdownFilters] = useState({
    keanuGray: '',
    keanuType: '',
  });
  const [error, setError] = useState('');

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setDropdownFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = `width: "${formFilters.width}", height: "${formFilters.height}", young: "${dropDownFilters.keanuType}", gray: "${dropDownFilters.keanuGray}"`;

    const isFormValid = formValidation(formFilters);

    setError('');

    if (isFormValid) {
      onFilter(gql`
        {
            keanu(${query}) 
            {
            image
            }
        }`);
    } else {
      setError('Width and height must be grater than 0. And for a better experience grater or equal to 100');
    }
  };

  return (
    <>
      <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-group'>
          <Select name='keanuType' value={dropDownFilters.keanuType} options={typeOptions} onChange={handleSelectOnChange} />
        </div>

        <div className='form-group'>
          <Select name='keanuGray' value={dropDownFilters.keanuGray} options={grayOptions} onChange={handleSelectOnChange} />
        </div>

        <div className='form-group'>
          <Input label='Width:' type='number' name='width' value={formFilters.width} onChange={handleInputOnChange} error={error} />
        </div>

        <div className='form-group'>
          <Input label='Height:' type='number' name='height' value={formFilters.height} onChange={handleInputOnChange} error={error} />
        </div>

        <div className='form-group'>
          <Button type='submit' className='button'>
            Keanu
          </Button>
        </div>
      </form>
    </>
  );
};
