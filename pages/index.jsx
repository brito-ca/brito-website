import { AppLayout, Placeholder, Hero, Form } from '@/components'
import Banner from '@/components/Banner/Banner'
import labels from '@/constants/labels.en'
import ContactUs from '@/components/ContactUs/ContactUs'
import styles from '@/styles/AppLayout.module.css'

export default function Home() {
    return (
        <AppLayout>
            <Hero
                title={labels.welcomeToBrito.title}
                description={labels.welcomeToBrito.description}
                image={labels.image}
            />
            <Placeholder id='about' title='About Us' />
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
                    id='join-us'
                    title={labels.joinUs.title}
                    description={labels.joinUs.description}
                />
            </div>
            <Form />
            <ContactUs />
        </AppLayout>
    )
}
