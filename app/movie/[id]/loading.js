// loading page
import Loading from '@/components/loading';

const MovieLoading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Loading />
    </div>
  );
};

export default MovieLoading;
