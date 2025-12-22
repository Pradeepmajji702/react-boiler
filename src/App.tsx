
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/slices/dataSlice';
import type { RootState, AppDispatch } from './store';
import reactLogo from './assets/react.svg';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    // Example: fetch data on mount
    dispatch(fetchData('/example-endpoint'));
  }, [dispatch]);

  return (
    <div className="p-button">
      <p>Backend URL: {import.meta.env.VITE_BACKEND_API_URL}</p>
      <img src={reactLogo} alt="PrimeReact Logo" />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
