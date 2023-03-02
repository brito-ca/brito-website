import styles from '@/styles/Hero.module.css';
import Image from 'next/image';

const Hero = (props) => {
    const { title, text, img_source, description, width, height} = props;
    return (
        <div>
            <div className={styles.hero_container}>
                <div className={styles.welcome_box}>
                    <h1 className={styles.welcome_text}>{title}</h1>
                </div>
                <p className={styles.intro_text}>{text}</p>
            </div>
            <div className={styles.img_container}>
                <Image
                    src={img_source}
                    alt={description}
                    width={width}
                    height={height}
                />
            </div>
        </div>
    );
};
export default Hero