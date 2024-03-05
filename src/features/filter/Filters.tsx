import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Input } from '../../components/form/Input';
import { Select } from '../../components/form/Select';
import { Button } from '../../components/ui/Button';
import { grayOptions, typeOptions } from '../../data/keanuOptions';
import { formValidation, sizeValidation } from '../../helpers/formValidation';
import { IPictureSize } from '../../interfaces/IPictureSize';
import { KeanuActionType } from '../../store/keanu/keanuActionTypes';

export const Filters: React.FC = () => {
  const dispatch = useDispatch();

  const [displayModal, setDisplayModal] = useState(false);
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
    setDisplayModal(false);

    if (isFormValid) {
      const isSized = sizeValidation(formFilters);

      if (isSized) {
        dispatch({
          type: KeanuActionType.FETCH_PICTURE_REQUEST,
          payload: query,
        });
      } else {
        setDisplayModal(true);
      }
    } else {
      setError('Width and height must be grater than 0. And for a better experience grater or equal to 100');
    }
  };

  const handleDisplaySizedPicture = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = `width: "${formFilters.width}", height: "${formFilters.height}", young: "${dropDownFilters.keanuType}", gray: "${dropDownFilters.keanuGray}"`;

    dispatch({
      type: KeanuActionType.FETCH_PICTURE_REQUEST,
      payload: query,
    });

    setDisplayModal(false);
  };

  const handleOnModalCancel = () => {
    setDisplayModal(false);
  };

  return (
    <div className='form-container'>
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

      {displayModal ? (
        <form className='form-modal' onSubmit={handleDisplaySizedPicture}>
          <h2 className='form-modal-title'>The width and hight exceed the size of the canvas</h2>

          <div className='form-modal-text'>Do you still want to load it?</div>

          <Button type='submit' className='button'>
            Yes
          </Button>
          <Button type='button' className='button' onClick={handleOnModalCancel}>
            Cancel
          </Button>
        </form>
      ) : null}
    </div>
  );
};
