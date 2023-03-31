import useMedia from '@/hooks/useMedia'
import styles from '@/styles/Hero.module.css'

const Hero = (props) => {
    const { title, description, image } = props
    const { data: imageProps, isLoading } = useMedia(image)
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
                {isLoading ? <>...</> : <img className={styles.img_banner} {...imageProps} />}
            </div>
        </div>
    )
}
export default Hero
