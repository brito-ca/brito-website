import { AppLayout, HomePage } from '@/components'
import labels from '@/constants/labels.en'
import getHomePage from '@/services/getHomepage'
import getNavigation from '@/services/getNavigation'
const Home = ({ pageData, navigation, socialMedia }) => {
    const homePageProps = {
        ...pageData.data,
        socialMedia,
    }
    return (
        <AppLayout content={{ navigation, footerContent: labels.footerContent }}>
            <HomePage {...homePageProps} />
        </AppLayout>
    )
}

export async function getStaticProps() {
    const pageData = await getHomePage('pt')
    const navigation = await getNavigation()
    return {
        props: {
            pageData,
            navigation,
        },
        revalidate: 30,
    }
}

export default Home
