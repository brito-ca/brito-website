import { Banner, VectorCard, Image } from '@/components'
import styles from '@/styles/AboutUs.module.css'

const AboutUs = (props) => {
    const { banner, cards, image } = props
    return (
        <div id={banner.id}>
            <div className={styles.aboutUsBanner}>
                <Banner title={banner.title} description={banner.description} />
            </div>
            <div className={`${styles.iconsContainer} flex-row-space-between`}>
                {cards?.map((item, index) => (
                    <VectorCard
                        key={index}
                        icon={item.icon}
                        value={item.value}
                        description={item.description}
                    />
                ))}
            </div>
            <div className={styles.aboutUsImage}>
                <Image alt={image.alt} {...image} />
            </div>
        </div>
    )
}

export default AboutUs
