import { HOMEPAGE_API_URL } from '@/constants/app'
import getAboutUs from './getAboutUs'
import getBoard from './getBoard'
import getContactUs from './getContactUs'
import getHero from './getHero'
import getMenu from './getMenu'
import getSocialMedia from './getSocialMedia'

const getHomePage = async (locale) => {
    const results = await fetch(HOMEPAGE_API_URL)
    const result = await results.json()
    const localeData = result.find((item) => item.slug === locale)
    const { id, slug, acf } = localeData
    return {
        id,
        language: slug,
        meta: {},
        header: {
            navigation: await getMenu(`navigation-${locale}`),
        },
        footer: {},
        socialMedia: await getSocialMedia(),
        blocks: {
            ourBoard: {
                title: acf['our-board'].title,
                cards: await getBoard(locale),
            },
            hero: await getHero(acf.hero),
            aboutUs: await getAboutUs(acf['about_us']),
            ourMission: acf['our-mission'],
            ourVision: acf['our-vision'],
            joinUs: {
                id: 'join-us',
                ...acf['join-us'],
            },
            contactUs: await getContactUs(acf['contact_us']),
        },
    }
}

export default getHomePage
