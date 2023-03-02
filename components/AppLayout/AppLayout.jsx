import { Header, Footer } from '@/components';
import styles from '@/styles/AppLayout.module.css';
import Link from 'next/link';

const AppLayout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header>
        <Link href={'/'}>
          <h1>Brito Website</h1>
        </Link>
      </Header>
      <main>{children}</main>
      <Footer>Footer</Footer>
    </div>
  );
};
export default AppLayout;
