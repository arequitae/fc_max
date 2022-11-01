import FunctionCal from '@/components/FunctionCal';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const ToolPage = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <FunctionCal />
      </div>
    </PageContainer>
  );
};

export default ToolPage;
