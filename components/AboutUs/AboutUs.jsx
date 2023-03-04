import AboutUsBanner from "@/components/AboutUs/AboutUsBanner"
import Icon from "@/components/AboutUs/Icon"
import Image from 'next/image'
import styles from '@/styles/AboutUs.module.css'

const AboutUs = () => {
    return (
        <main>
            <AboutUsBanner
                title='About us'
                description='Brazilian IT Ottawa (BRITO) is a group of Brazilian professionals with a career focused in 
                Information Technology living in the National Capital Region, from different backgrounds, 
                areas of expertise and willingness to help each other by sharing knowledge and experiences, 
                building a social and professional network.'
            />
            <div className={styles.container}>
                <Icon className={styles.icon.one}
                    iconPath='/credibility.png'
                    iconWidth={62.15}
                    iconHeight={75.96}
                    value='+7'
                    description='Years in operation'
                />

                <Icon className={styles.icon.two}
                    iconPath='/network.png'
                    iconWidth={69.06}
                    iconHeight={65.6}
                    value='+72'
                    description='Network events'
                />

                <Icon className={styles.icon.two}
                    iconPath='/participants.png'
                    iconWidth={82.87}
                    iconHeight={41.43}
                    value='+250'
                    description='Participants'
                />
            </div>
            <Image className={styles.members}
                src={'/members.png'}
                alt='members'
                width={1440}
                height={530}
            />
        </main>
    )
};
export default AboutUs;