export const Filter: React.FC = () => {
  return (
    <form className='form'>
      <div className='form-group'>
        <select>
          <option value=''>Any Keanu</option>
          <option value=''>Young Keanu</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor=''>Gray scale:</label>
        <input type='number' />
      </div>

      <div className='form-group'>
        <label htmlFor=''>Width:</label>
        <input type='number' />
      </div>

      <div className='form-group'>
        <label htmlFor=''>Height:</label>
        <input type='number' />
      </div>

      <div className='form-group'>
        <button className='button'>Keanu</button>
      </div>
    </form>
  );
};
