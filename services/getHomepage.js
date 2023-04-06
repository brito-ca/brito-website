import { HOMEPAGE_API_URL } from '@/constants/app'
import {
    getAboutUs,
    getBoard,
    getContactUs,
    getHero,
    getLanguage,
    getMenu,
    getSocialMedia,
    getForm,
} from '@/services'
import getFooter from './getFooter'

const getHomePage = async (locale) => {
    const results = await fetch(HOMEPAGE_API_URL)
    const result = await results.json()
    const localeData = result.find((item) => item.slug === locale)
    const { id, slug, acf } = localeData
    const navigation = await getMenu(`navigation-${locale}`)
    return {
        id,
        language: slug,
        meta: {
            title: acf.meta?.title,
            description: acf.meta?.description,
        },
        header: {
            navigation,
            languages: await getLanguage(),
        },
        footer: {
            content: await getFooter(acf.footer),
            navigation,
        },
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
            form: await getForm(acf['form']),
        },
    }
}

export default getHomePage
