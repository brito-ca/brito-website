import styles from '@/styles/Hero.module.css'
import Image from 'next/image'

const image = {
    alt: 'parlement',
    src: '/parlement.png',
    width: '900',
    height: '900',
}

const Hero = (props) => {
    const {
        title,
        description,
        alt = image.alt,
        src = image.src,
        width = image.width,
        height = image.height,
    } = props
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
            <div className={styles.crop_img_banner}>
                <Image
                    className={styles.img_banner}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
        </div>
    )
}
export default Hero
