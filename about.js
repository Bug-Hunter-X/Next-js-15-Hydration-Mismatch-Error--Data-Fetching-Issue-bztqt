```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if the data fetched here is not
  // available during the server-side rendering phase
  const data = fetch('/api/data').then(res => res.json());

  return (
    <div>
      <h1>About Us</h1>
      {/* This will cause a hydration mismatch because data is not yet available */}
      <p>Some data: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```javascript
//pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call that takes some time
  await new Promise(resolve => setTimeout(resolve, 500));
  res.status(200).json({ message: 'Data from API' });
}
```