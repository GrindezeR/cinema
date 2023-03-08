import { useEffect, useState } from 'react';

type TData = {
  name: string;
};

const Application = () => {
  const [data, setData] = useState<TData>();
  console.warn('RENDER');
  useEffect(() => {
    fetch(`http://localhost:3000/api/hello`)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) return null;

  return (
    <>
      <div>Name:{data.name}</div>
    </>
  );
};

export default Application;
