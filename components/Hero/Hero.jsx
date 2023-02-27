import styles from '@/styles/Hero.module.css';

const Hero = (props) => {
    const { title, text } = props;
    return (
        <div>
            <div className={styles.hero_container}>
                <h1 className={styles.welcome_text}>{title}</h1>
                <p className={styles.intro_text}>{text}</p>
            </div>
        </div>
    );
};
export default Hero