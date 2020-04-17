import React, { useEffect, useState } from 'react';
import { getData } from '@/services/index';

import styles from './index.less';

export default () => {
  const [data, setDate] = useState({ lists: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData('/api/web201605/js/herolist.json');
      setDate(result.data);
    };
    fetchData();
  });

  return (
    <div>
      <h1 className={styles.title}>Page hero</h1>
    </div>
  );
};
