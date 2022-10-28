import React, { useState } from 'react';
import styles from './styles.module.css';

const Counter = () => {
  const [count, updateCount] = useState(0);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.counterButton}
        onClick={() => updateCount((prevCount) => prevCount + 1)}
      >
        Count
      </button>

      <p className={styles.counter}>{count}</p>
    </div>
  );
};

export default Counter;
