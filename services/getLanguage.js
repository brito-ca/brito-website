import { LANGUAGES_API_URL } from '@/constants/app'

const getLanguage = async () => {
    const results = await fetch(LANGUAGES_API_URL)
    const result = await results.json()
    const dataMap = Object.entries(result[0].acf.items).map(([key, val]) => {
        return {
            id: key,
            link: val.link,
            text: val.text,
        }
    })
    return dataMap
}
export default getLanguage
