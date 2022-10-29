import Guide from '@/components/Guide';
import FunctionCal from '@/components/FunctionCal';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <FunctionCal />
      </div>
    </PageContainer>
  );
};

export default HomePage;
