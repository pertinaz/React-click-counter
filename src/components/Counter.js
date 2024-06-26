import React, { useEffect, useState } from 'react';
import '../styleSheets/Counter.css';

function Counter({ numClics }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (numClics > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [numClics]);

  return (
    <div className={`counter ${animate ? 'animate' : ''}`}>
      {numClics}
    </div>
  );   
}

export default Counter;
