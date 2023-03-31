import { HOMEPAGE_API_URL } from '@/constants/app'

const getHomePage = async (locale) => {
    const results = await fetch(HOMEPAGE_API_URL)
    const result = await results.json()
    const localeData = result.find((item) => item.slug === locale)
    const { id, slug, acf } = localeData
    return {
        id,
        language: slug,
        data: acf,
    }
}

export default getHomePage
