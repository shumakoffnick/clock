import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';



function MyApp() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:
      <Clock value={value} />
      </p>
      
    </div>
  );
}
export default MyApp