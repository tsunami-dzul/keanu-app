import { useSelector } from 'react-redux';

export const Picture: React.FC = () => {
  const { picture, loading, error }: any = useSelector<any>((state) => state.keanu);

  if (loading)
    return (
      <div className='spinner'>
        <span className='loader'></span>
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div className='picture'>
      <div className='svg-img' dangerouslySetInnerHTML={{ __html: picture ?? '' }}></div>
    </div>
  );
};
