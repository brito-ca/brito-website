import { AboutUs, Banner, ContactUs, Hero, Board, Form } from '@/components'
import getAboutUs from '@/services/getAboutUs'

const HomePage = ({ data }) => {
    return (
        <>
            <Hero {...data.hero} />
            <AboutUs {...getAboutUs(data['about_us'])} />
            <Banner {...data['our-mission']} />
            <Banner {...data['our-vision']} />
            {/* <Board title='Our Board' cards={labels.card_data} /> */}
            <Banner {...data['join-us']} />
            {/* <Form {...labels.form} /> */}
            {/* <ContactUs
                id={labels.contactUs.id}
                title={labels.contactUs.title}
                chat={labels.chat.title}
                descriptionChat={labels.chat.description}
                email={labels.email}
                basedin={labels.location.basedin}
                city={labels.location.city}
                visit={labels.media.visit}
                socialMedia={socialMedia}
            /> */}
        </>
    )
}
export default HomePage
