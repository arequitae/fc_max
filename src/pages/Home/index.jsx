import FunctionCal from '@/components/FunctionCal';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { testConnect } from '../../services/basicService';

const HomePage = () => {
  testConnect().then((data) => {
    console.log(data);
  });
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <h1>Arequitae</h1>
        <script
          type="text/javascript"
          id="clstr_globe"
          src="//clustrmaps.com/globe.js?d=YejPRoMWOl5OUBKZsCd1pA2p00jHEvXirjU1HBPkY_o"
        ></script>
      </div>
    </PageContainer>
  );
};

export default HomePage;
