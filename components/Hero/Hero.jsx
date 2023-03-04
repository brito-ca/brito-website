import styles from '@/styles/Hero.module.css'
import BannerImage from '@/components/Hero/BannerImage'

const Hero = (props) => {
    const { title, description } = props
    return (
        <div className={styles.container}>
            <div className={styles.hero_container}>
                <div className={styles.welcome_box}>
                    <h3 className={styles.welcome_text}>{title}</h3>
                </div>
                <div className='body1 b1'>
                    <p className={styles.intro_text}>{description}</p>
                </div>
            </div>
            <BannerImage/>
        </div>
    )
}
export default Hero
