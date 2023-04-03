import styles from '@/styles/Hero.module.css'
import { Image } from '@/components'
import { Sanitize } from '@/components'

const Hero = (props) => {
    const { title, description, image } = props

    return (
        <div className={styles.container}>
            <div className={styles.hero_container}>
                <div className={styles.welcome_box}>
                    <h3 className={styles.welcome_text}>
                        <Sanitize input={title} />
                    </h3>
                </div>
                <div className='body1'>
                    <p className={styles.intro_text}>
                        <Sanitize input={description} />
                    </p>
                </div>
            </div>
            <div className={styles.crop_img_banner}>
                <Sanitize input={image.src} />
                <Sanitize input={image.alt} />
                <Sanitize input={image.width} />
                <Sanitize input={image.height} />
                <Image className={styles.img_banner} {...image} />
            </div>
        </div>
    )
}

export default Hero
