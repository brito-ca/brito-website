import Banner from "@/components/Banner/Banner"
import VectorCard from "@/components/AboutUs/VectorCard"
import Image from 'next/image'
import styles from '@/styles/AboutUs.module.css'

const AboutUs = (props) => {
    const { banner, vectorCard, membersImage } = props;
    return (
        <div id={banner.id}>
            <div className={styles.aboutUsBanner}>
                <Banner title={banner.title} description={banner.description} />
            </div>
            <div className={`${styles.iconsContainer} flex-row-space-between`}>
                {vectorCard.map((item, index) => (
                    <VectorCard key={index} image={item.image} value={item.value} description={item.description} />
                ))}
            </div>
            <div className={styles.aboutUsImage}>
                <Image {...membersImage} />
            </div>
        </div>
    )
};
export default AboutUs;

