import { AppLayout, HomePage } from '@/components'
import { LOCALE_EN } from '@/constants/app'
import getHomePage from '@/services/getHomepage'
const Home = ({ pageData }) => {
    console.log(pageData)
    return (
        <AppLayout content={pageData}>
            <HomePage data={pageData.blocks} />
        </AppLayout>
    )
}

export async function getStaticProps() {
    const pageData = await getHomePage(LOCALE_EN)
    return {
        props: {
            pageData,
        },
        revalidate: 30,
    }
}

export default Home
