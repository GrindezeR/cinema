import { useEffect, useState } from 'react';

type TData = {
  name: string;
};

const Application = () => {
  const [data, setData] = useState<TData>();

  console.warn('RENDER');

  useEffect(() => {
    const getData = async () => {
      const response = await (
        await fetch(`http://localhost:3000/api/hello`)
      ).json();
      setData(response);
    };
    getData();
  }, []);

  if (!data) return <span>...LOADING...</span>;

  return (
    <>
      <div className='test-border'>Name: {data.name}</div>
    </>
  );
};

export default Application;
