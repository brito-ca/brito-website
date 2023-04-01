import { AppLayout, HomePage } from '@/components'
import { LOCALE_EN } from '@/constants/app'
import labels from '@/constants/labels.en'
import getHomePage from '@/services/getHomepage'
import getNavigation from '@/services/getNavigation'
import getSocialMedia from '@/services/getSocialMedia'
const Home = ({ pageData, navigation, socialMedia }) => {
    console.log(pageData)
    return (
        <AppLayout content={{ navigation, socialMedia, footerContent: labels.footerContent }}>
            <HomePage data={pageData.blocks} socialMedia={socialMedia} />
        </AppLayout>
    )
}

export async function getStaticProps() {
    const [pageData, navigation, socialMedia] = await Promise.all([
        getHomePage(LOCALE_EN),
        getNavigation(),
        getSocialMedia(),
    ])
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
