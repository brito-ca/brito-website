import styles from '@/styles/Hero.module.css'
import Image from 'next/image'

function setSource(img_source, img_source_mbl, alt) {
    return (
        <div>
            <div className={styles.img_mobile}>
                <Image
                    className={styles.img_item}
                    src={img_source_mbl}
                    alt={alt}
                    width={327}
                    height={194}
                />
            </div>
            <div className={styles.img_monitor}>
                <Image
                    className={styles.img_item}
                    src={img_source}
                    alt={alt}
                    width={632}
                    height={900}
                />
            </div>
        </div>
    )
}

const Hero = (props) => {
    const { title, alt, img_source, img_source_mbl, description } = props
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
            {setSource(img_source, img_source_mbl, alt)}
        </div>
    )
}
export default Hero
