import AboutUsBanner from "@/components/AboutUsBanner/AboutUsBanner"
import Icon from "@/components/Icon/Icon"
import styles from '@/styles/AboutUs.module.css'

const AboutUs = () => {
    return (
        <main>
            <AboutUsBanner className={styles.text}
                title='About us'
                description='Brazilian IT Ottawa (BRITO) is a group of Brazilian professionals with a career focused in 
                Information Technology living in the National Capital Region, from different backgrounds, 
                areas of expertise and willingness to help each other by sharing knowledge and experiences, 
                building a social and professional network.'
            />
            <div className={styles.icons}>
                <Icon
                    iconPath='/credibility.png'
                    iconWidth={62.15}
                    iconHeight={75.96}
                    value='+7'
                    description='Years in operation'
                />

                <Icon
                    iconPath='/network.png'
                    iconWidth={69.06}
                    iconHeight={65.6}
                    value='+72'
                    description='Network events'
                />

                <Icon
                    iconPath='/participants.png'
                    iconWidth={82.87}
                    iconHeight={41.43}
                    value='+250'
                    description='Participants'
                />
            </div>
        </main>
    )
};
export default AboutUs;