import { AboutUs, Banner, ContactUs, AppLayout, Hero, Board, Form } from '@/components'
import labels from '@/constants/labels.en'
import styles from '@/styles/AppLayout.module.css'

const navigation = [
    { id: labels.aboutUs.id, title: labels.aboutUs.title, navTitle: labels.aboutUs.navTitle },
    { id: labels.joinUs.id, title: labels.joinUs.title, navTitle: labels.joinUs.navTitle },
    { id: labels.contactUs.id, title: labels.contactUs.title, navTitle: labels.contactUs.navTitle },
]
const socialMedia = [
    { id: 'instagram', link: labels.media.instagramlink, icon: 'instagram' },
    { id: 'linkedin', link: labels.media.linklinkedin, icon: 'linkedin' },
    { id: 'facebook', link: labels.media.linkfacebook, icon: 'facebook' },
]

export default function Home() {
    return (
        <AppLayout
            content={{
                navigation,
                smallLogo: labels.smallLogo,
                socialMedia,
                footerContent: labels.footerContent,
            }}
        >
            <Hero
                title={labels.welcomeToBrito.title}
                description={labels.welcomeToBrito.description}
                image={labels.heroImage}
            />
            <AboutUs
                banner={labels.aboutUs}
                vectorCard={labels.vectorCard}
                membersImage={labels.membersImage}
            />
            <div className={styles.logoOnmission}>
                <Banner
                    title={labels.ourMission.title}
                    description={labels.ourMission.description}
                />
                <div className={styles.rectangle4}></div>
                <Banner title={labels.ourVision.title} description={labels.ourVision.description} />
            </div>
            <Board title='Our Board' cards={labels.card_data} />
            <div className={styles.logoOnJoinUs}>
                <Banner
                    id={labels.joinUs.id}
                    title={labels.joinUs.title}
                    description={labels.joinUs.description}
                />
            </div>
            <Form {...labels.form} smallLogo={labels.smallLogo} />
            <ContactUs
                id={labels.contactUs.id}
                title={labels.contactUs.title}
                chat={labels.chat.title}
                descriptionChat={labels.chat.description}
                email={labels.email}
                basedin={labels.location.basedin}
                city={labels.location.city}
                visit={labels.media.visit}
                socialMedia={socialMedia}
            />
        </AppLayout>
    )
}
