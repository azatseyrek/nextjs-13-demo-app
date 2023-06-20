const NotFoundPage = () => {
  //  404 page

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 200px)',
      }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFoundPage;
