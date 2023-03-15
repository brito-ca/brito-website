import { AppLayout, Placeholder, Hero, Board, Form } from '@/components'
import Banner from '@/components/Banner/Banner'
import labels from '@/constants/labels.en'
import ContactUs from '@/components/ContactUs/ContactUs'
import styles from '@/styles/AppLayout.module.css'

const navigation = [
    { id: labels.aboutUs.id, title: labels.aboutUs.title, navTitle: labels.aboutUs.navTitle },
    { id: labels.joinUs.id, title: labels.joinUs.title, navTitle: labels.joinUs.navTitle },
    { id: labels.contactUs.id, title: labels.contactUs.title, navTitle: labels.contactUs.navTitle },
]
const menu = [
    {
        title: labels.footerNavigation.company,
        links: [
            { label: labels.footerNavigation.about, href: labels.footerNavigation.linkAbout },
            { label: labels.footerNavigation.contact, href: labels.footerNavigation.contactAbout },
        ],
    },
    {
        title: labels.footerNavigation.joinus,
        links: [
            { label: labels.footerNavigation.network, href: labels.footerNavigation.linkJoinus },
        ],
    },
]

const icons = [
    { href: labels.media.instagramlink, variant: labels.footerIcons.instagram },
    { href: labels.media.linklinkedin, variant: labels.footerIcons.linkedin },
    { href: labels.media.linkfacebook, variant: labels.footerIcons.facebook },
]

const description = {
    phrase: labels.footerBrito.phrase,
    altFlag: labels.footerBrito.altFlag,
    altWordmark: labels.footerBrito.altWordmark,
}
const socialMedia = [
    { id: 'instagram', link: labels.media.instagramlink, icon: 'instagram' },
    { id: 'linkedin', link: labels.media.linklinkedin, icon: 'linkedin' },
    { id: 'facebook', link: labels.media.linkfacebook, icon: 'facebook' },
]

export default function Home() {
    return (
        <AppLayout navigation={navigation} description={description} menu={menu} icons={icons}>
            <Hero
                title={labels.welcomeToBrito.title}
                description={labels.welcomeToBrito.description}
                image={labels.heroImage}
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
            <Board title='Our Board' cards={labels.card_data} />
            <div className={styles.logoOnJoinUs}>
                <Banner
                    id={labels.joinUs.id}
                    title={labels.joinUs.title}
                    description={labels.joinUs.description}
                />
            </div>
            <Form />
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
