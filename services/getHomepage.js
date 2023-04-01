import { HOMEPAGE_API_URL } from '@/constants/app'
import getAboutUs from './getAboutUs'
import getBoard from './getBoard'
import getHero from './getHero'

const getHomePage = async (locale) => {
    const results = await fetch(HOMEPAGE_API_URL)
    const result = await results.json()
    const localeData = result.find((item) => item.slug === locale)
    const { id, slug, acf } = localeData
    return {
        id,
        language: slug,
        data: acf,
        blocks: {
            ourBoard: {
                title: acf['our-board'].title,
                cards: await getBoard(locale),
            },
            hero: await getHero(acf.hero),
            aboutUs: await getAboutUs(acf['about_us']),
            ourMission: acf['our-mission'],
            ourVision: acf['our-vision'],
            joinUs: acf['join-us'],
        },
    }
}

export default getHomePage
