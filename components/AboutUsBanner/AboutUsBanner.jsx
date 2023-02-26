import styles from '@/styles/AboutUsBanner.module.css'

const AboutUsBanner = (props) => {
  const { title, description } = props;
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default AboutUsBanner;
