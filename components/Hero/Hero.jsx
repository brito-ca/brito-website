import styles from '@/styles/Hero.module.css'
import GetWidth from '@/components/Hero/WindowSize'
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

    // const size = GetWidth()

    // if (size <= 600) {
    //     return (
    //         <Image
    //             className={styles.img_item}
    //             src={img_source_mbl}
    //             alt={description}
    //             width={327}
    //             height={194}
    //         />
    //     )
    // } else {
    //     console.log(GetWidth())
    //     return (
    //         <Image
    //             className={styles.img_item}
    //             src={img_source}
    //             alt={description}
    //             width={632}
    //             height={900}
    //         />
    //     )
    // }
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
