import styles from '@/styles/Hero.module.css';

const Hero = (props) => {
    const { title, text } = props;
    return (
        <div>
            <div className={styles.hero_container}>
                <div className={styles.welcome_box}>
                    <p className={styles.welcome_text}>{title}</p>
                </div>
                <p className={styles.intro_text}>{text}</p>
            </div>
        </div>
    );
};
export default Hero