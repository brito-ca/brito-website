import Banner from "@/components/Banner/Banner"
import VectorCard from "@/components/AboutUs/VectorCard"
import labels from '@/constants/labels.en'
import Image from 'next/image'
import styles from '@/styles/AboutUs.module.css'

const AboutUs = (props) => {
    const { vectorCard, membersImage } = props;
    return (
        <div id={labels.aboutUs.id}>
            <div>
                <Banner title={labels.aboutUs.title} description={labels.aboutUs.description} />
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

