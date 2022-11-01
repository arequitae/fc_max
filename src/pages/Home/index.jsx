import FunctionCal from '@/components/FunctionCal';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { testConnect } from '../../services/basicService';
import { useEffect } from 'react';

const HomePage = () => {
  testConnect().then((data) => {
    console.log(data);
  });
  useEffect(() => {
    let script2 = document.createElement('script');
    script2.id = 'clustrmaps';
    script2.type = 'text/javascript';
    script2.src =
      '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=500&t=tt&d=YejPRoMWOl5OUBKZsCd1pA2p00jHEvXirjU1HBPkY_o&co=2d78ad&cmo=3acc3a&cmn=ff5353&ct=ffffff';
    document.querySelector('.' + styles.globalMap).appendChild(script2);
  }, []);
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <h1>Arequitae</h1>
      </div>
      <div className={styles.globalMap}></div>
    </PageContainer>
  );
};

export default HomePage;
