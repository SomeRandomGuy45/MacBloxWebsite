// src/components/HttpMethodBadge.js

import React from 'react';
import styles from './HttpMethodBadge.module.css';

const HttpMethodBadge = ({ method, url }) => {
  return (
    <div className={styles.container}>
      <span className={`${styles.method} ${styles[method.toLowerCase()]}`}>{method}</span>
      <span className={styles.url}>{url}</span>
    </div>
  );
};

export default HttpMethodBadge;