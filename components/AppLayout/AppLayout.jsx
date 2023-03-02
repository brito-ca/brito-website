import { Header, Footer } from "@/components";
import styles from "@/styles/AppLayout.module.css";

const AppLayout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer>Footer</Footer>
    </div>
  );
};
export default AppLayout;
