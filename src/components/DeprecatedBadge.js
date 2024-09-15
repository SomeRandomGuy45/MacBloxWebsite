// src/components/DeprecatedBadge.js

import React from 'react';
import styles from './DeprecatedBadge.module.css'; // Import CSS for styling

const DeprecatedBadge = () => {
  return (
    <span className={styles.badge}>
      <span className={styles.icon}>⚠️</span>
      <span className={styles.label}>Deprecated</span>
    </span>
  );
};

export default DeprecatedBadge;
