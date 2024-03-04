interface PictureProps {
  picture: string;
  loading: boolean;
  error: string;
}

export const Picture: React.FC<PictureProps> = ({ picture, loading, error }) => {
  if (loading) return <div>Is loading...</div>;

  if (error) return <div>{error}</div>;

  return <div className='picture' dangerouslySetInnerHTML={{ __html: picture }}></div>;
};
