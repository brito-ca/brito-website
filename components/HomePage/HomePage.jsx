import { AboutUs, Banner, ContactUs, Hero, Board, Form } from '@/components'

const HomePage = ({ data }) => {
    const { hero, aboutUs, ourMission, ourVision, ourBoard, joinUs, contactUs, form } = data
    return (
        <>
            <Hero {...hero} />
            <AboutUs {...aboutUs} />
            <Banner {...ourMission} />
            <Banner {...ourVision} />
            <Board {...ourBoard} />
            <Banner {...joinUs} />
            <ContactUs {...contactUs} />
            <Form {...form} />
        </>
    )
}
export default HomePage
