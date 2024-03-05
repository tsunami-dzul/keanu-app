import { useTypedSelector } from '../../hooks/useTypedSelectors';

export const Picture: React.FC = () => {
  const { picture, loading, error } = useTypedSelector((state) => state.keanu);

  if (loading) {
    return (
      <div className='spinner'>
        <span className='loader'></span>
      </div>
    );
  }

  if (error) return <div className='error'>{error}</div>;

  return (
    <div className='picture'>
      <div className='svg-img' dangerouslySetInnerHTML={{ __html: picture ?? '' }}></div>
    </div>
  );
};
