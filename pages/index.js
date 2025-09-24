import { useEffect, useState } from 'react';

export default function Home() {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    fetch('/api/ip')
      .then(res => res.json())
      .then(data => setIp(data.ip));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Your IP Address</h1>
      {ip ? <p>{ip}</p> : <p>Loading...</p>}
    </div>
  );
}
