import { AboutUs, Banner, ContactUs, Hero, Board, Form } from '@/components'

const HomePage = ({ data }) => {
    return (
        <>
            <Hero {...data.hero} />
            <AboutUs {...data.aboutUs} />
            <Banner {...data.ourMission} />
            <Banner {...data.ourVision} />
            <Board {...data.ourBoard} />
            <Banner {...data.joinUs} />
            {/* 
            <Form {...labels.form} />
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
            /> */}
        </>
    )
}
export default HomePage
