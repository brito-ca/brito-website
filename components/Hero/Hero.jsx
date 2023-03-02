import styles from '@/styles/Hero.module.css';
import GetWidth from '@/components/Hero/WindowSize'
import Image from 'next/image';

function setSource(img_source, img_source_mbl, description) {
    if (GetWidth() <= 600) {
        console.log(GetWidth())
        return (
            <Image
                className={styles.img_item}
                src={img_source_mbl}
                alt={description}
                width={327}
                height={194}
            />
        )
    } else {
        console.log(GetWidth())
        return (
            <Image
                className={styles.img_item}
                src={img_source}
                alt={description}
                width={632}
                height={900}
            />
        )
    }
};

const Hero = (props) => {
    const { title, text, img_source, img_source_mbl, description} = props;
    return (
        <div className={styles.container}>
            <div className={styles.hero_container}>
                <div className={styles.welcome_box}>
                    <h3 className={styles.welcome_text}>{title}</h3>
                </div>
                <div className='body1 b1'>
                    <p className={styles.intro_text}>{text}</p>
                </div>
            </div>
            <div>
                {setSource(img_source, img_source_mbl, description)}
            </div>
        </div>
    );
};
export default Hero