interface PictureProps {
  picture: string | undefined;
  loading: boolean;
  error: string | null;
}

export const Picture: React.FC<PictureProps> = ({ picture, loading, error }) => {
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
