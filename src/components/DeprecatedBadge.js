// src/components/DeprecatedBadge.js

import React from 'react';
import styles from './DeprecatedBadge.module.css'; // Import CSS for styling

function returnSpan(type, customMessage)
{
  console.log(customMessage)
  if (type == "dangerous" != 0 && customMessage.length > 0) 
  {
    return (
      <span className={styles.dangerous_badge}>
          <span className={styles.icon}>⚠️</span>
          <span className={styles.label}>{customMessage}</span>
      </span>
    );
  }
  else if (customMessage.length > 0)
  {
    return (
      <span className={styles.badge}>
          <span className={styles.icon}>⚠️</span>
          <span className={styles.label}>customMessage</span>
      </span>
    );
  }
  else
  {
    return (
      <span className={styles.badge}>
        <span className={styles.icon}>⚠️</span>
        <span className={styles.label}>Deprecated</span>
      </span>
    );
  }
}

const DeprecatedBadge = (type) => {
  return returnSpan(type.type, type.customMessage);
};

export default DeprecatedBadge;
