```javascript
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function About() {
  const { data, error } = useSWR('/api/data', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>About Us</h1>
      <p>Some data: {JSON.stringify(data)}</p>
    </div>
  );
}
```