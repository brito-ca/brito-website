import styles from '@/styles/banner.module.css';

const Banner = (props) => {
  const { title, description } = props;
  return (
    <div className={styles.banner}>
      <h3 className={styles.titleBanner} >{title}</h3>
      <p className={styles.descriptionBanner}>{description}</p>
    </div>
  );
};
export default Banner;
