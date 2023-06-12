import { AppLayout, HomePage } from '@/components'
import { LOCALE_EN } from '@/constants/app'
import getHomePage from '@/services/getHomepage'
const Home = ({ pageData, pageLocale }) => {
    return (
        <AppLayout content={pageData}>
            <HomePage data={pageData.blocks} pageLocale={pageLocale} />
        </AppLayout>
    )
}

export async function getStaticProps() {
    const pageData = await getHomePage(LOCALE_EN)
    return {
        props: {
            pageData,
            pageLocale: LOCALE_EN,
        },
        revalidate: 30,
    }
}

export default Home
