import { Header, Footer } from '@/components';
import styles from '@/styles/AppLayout.module.css';

const AppLayout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header>
        <h1>Brito Website</h1>
      </Header>
      <main>{children}</main>
      <Footer>Footer</Footer>
    </div>
  );
};
export default AppLayout;
