import { AppLayout, HomePage } from '@/components'
import labels from '@/constants/labels.en'
import getHomePage from '@/services/getHomepage'
import getNavigation from '@/services/getNavigation'
import getSocialMedia from '@/services/getSocialMedia'
const Home = ({ pageData, navigation, socialMedia }) => {
    return (
        <AppLayout content={{ navigation, socialMedia, footerContent: labels.footerContent }}>
            <HomePage data={pageData.data} socialMedia={socialMedia} />
        </AppLayout>
    )
}

export async function getStaticProps() {
    const pageData = await getHomePage('pt')
    const navigation = await getNavigation()
    const socialMedia = await getSocialMedia()
    return {
        props: {
            pageData,
            navigation,
            socialMedia,
        },
        revalidate: 30,
    }
}

export default Home
