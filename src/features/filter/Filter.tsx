import { useState } from 'react';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/ui/Button';
import { Select } from '../../components/form/Select';

export const Filter: React.FC = () => {
  const options = [
    {
      label: 'Any Keneau',
      value: '0',
    },
    {
      label: 'Young Keneau',
      value: '1',
    },
  ];
  const [filterItems, setFilterItems] = useState({
    grayScale: 0,
    width: 0,
    height: 0,
  });
  const [keanuType, setKeanutype] = useState('0');
  const [error, setError] = useState();

  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleSelectOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setKeanutype(event.target.value);
  };

  return (
    <form className='form'>
      <div className='form-group'>
        <Select value={keanuType} options={options} onChange={handleSelectOnChange} />
      </div>

      <div className='form-group'>
        <Input label='Gray scale:' type='number' name='grayScale' value={filterItems.grayScale} onChange={handleInputOnChange} error={error} />
      </div>

      <div className='form-group'>
        <Input label='Width:' type='number' name='width' value={filterItems.width} onChange={handleInputOnChange} error={error} />
      </div>

      <div className='form-group'>
        <Input label='Height:' type='number' name='height' value={filterItems.height} onChange={handleInputOnChange} error={error} />
      </div>

      <div className='form-group'>
        <Button type='submit' className='button'>
          Keanu
        </Button>
      </div>
    </form>
  );
};
