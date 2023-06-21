import Link from 'next/link';

const NotFoundPage = () => {
  //  404 page

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
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link
        style={{
          color: '#81a039',
          fontSize: '1 rem',
          marginTop: '1rem',
          border: '1px solid #81a039',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer',
          // hover opacity transition 0.5s ease
          transition: 'all 0.5s ease',
        }}
        href="/"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
