import styles from '@/styles/Hero.module.css'
import Image from 'next/image'
import banner from '../../public/parlement.png'
import labels from '@/constants/labels.en'

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero_container}>
                <div className={styles.welcome_box}>
                    <h3 className={styles.welcome_text}>{labels.welcomeToBrito.title}</h3>
                </div>
                <div className='body1 b1'>
                    <p className={styles.intro_text}>{labels.welcomeToBrito.description}</p>
                </div>
            </div>
            <div className={styles.crop_img_banner}>
                <Image
                    className={styles.img_banner}
                    src={banner}
                    alt='parlement'
                    width='900'
                    height='900'
                />
            </div>
        </div>
    )
}
export default Hero
