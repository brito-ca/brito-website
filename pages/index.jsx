import { AppLayout, Placeholder, Hero, Form } from '@/components'
import Banner from '@/components/Banner/Banner'
import labels from '@/constants/labels.en'
import ContactUs from '@/components/ContactUs/ContactUs'
import styles from '@/styles/AppLayout.module.css'

const navigation = [
    { id: labels.aboutUs.id, title: labels.aboutUs.title },
    { id: labels.joinUs.id, title: labels.joinUs.title },
    { id: labels.contactUs.id, title: labels.contactUs.title },
]

export default function Home() {
    return (
        <AppLayout navigation={navigation}>
            <Hero
                title={labels.welcomeToBrito.title}
                description={labels.welcomeToBrito.description}
                image={labels.image}
            />
            <Placeholder id={labels.aboutUs.id} title={labels.aboutUs.title} />
            <div className={styles.logoOnmission}>
                <Banner
                    title={labels.ourMission.title}
                    description={labels.ourMission.description}
                />
                <div className={styles.rectangle4}></div>
                <Banner title={labels.ourVision.title} description={labels.ourVision.description} />
            </div>
            <Placeholder title='Our Board' />
            <div className={styles.logoOnJoinUs}>
                <Banner
                    id={labels.joinUs.id}
                    title={labels.joinUs.title}
                    description={labels.joinUs.description}
                />
            </div>
            <Form />
            <ContactUs id={labels.contactUs.id} />
        </AppLayout>
    )
}
