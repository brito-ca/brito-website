import { AboutUs, Banner, ContactUs, Hero, Board } from '@/components'

const HomePage = ({ data }) => {
    const { hero, aboutUs, ourMission, ourVision, ourBoard, joinUs, contactUs } = data
    return (
        <>
            <Hero {...hero} />
            <AboutUs {...aboutUs} />
            <Banner {...ourMission} />
            <Banner {...ourVision} />
            <Board {...ourBoard} />
            <Banner {...joinUs} />
            <ContactUs {...contactUs} />
        </>
    )
}
export default HomePage
