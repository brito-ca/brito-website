import styles from '@/styles/Home.module.css';

const AppLayout = (props) => {
  const { children } = props;
  return <main className={styles.container}>{children}</main>;
};
export default AppLayout;
