import { AboutUs, Banner, ContactUs, Hero, Board, Form } from '@/components'
import Events from '../Events/Events'

const HomePage = ({ data }) => {
    const { hero, aboutUs, ourMission, ourVision, ourBoard, joinUs, events, contactUs, form } = data
    return (
        <>
            <Hero {...hero} />
            <AboutUs {...aboutUs} />
            <Banner {...ourMission} />
            <Banner {...ourVision} />
            <Board {...ourBoard} />
            <Banner {...joinUs} />
            <Form {...form} />
            <Events {...events} />
            <ContactUs {...contactUs} />
        </>
    )
}
export default HomePage
