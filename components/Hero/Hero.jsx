import styles from '@/styles/Hero.module.css'

const Hero = (props) => {
    const { title, description, image } = props
    return (
        <div className={styles.container}>
            <div className={styles.hero_container}>
                <div className={styles.welcome_box}>
                    <h3 className={styles.welcome_text}>{title}</h3>
                </div>
                <div className='body1'>
                    <p className={styles.intro_text}>{description}</p>
                </div>
            </div>
            <div className={styles.crop_img_banner}>
                <img className={styles.img_banner} {...image} lazy />
            </div>
        </div>
    )
}
export default Hero
