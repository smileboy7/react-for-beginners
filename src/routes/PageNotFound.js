import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/', { replace: true });
  }, 5000);

  return (
    <div>
      <div>Page Not Found...</div>
      <div>(back in 5 seconds)</div>
    </div>
  );
}

export default PageNotFound;
