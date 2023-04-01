import { MENU_NAVIGATION_API_URL } from '@/constants/app'

const getMenu = async (slug) => {
    const results = await fetch(MENU_NAVIGATION_API_URL)
    const result = await results.json()
    const data = result.find((item) => item?.slug === slug).acf.items
    const dataMap = Object.entries(data).map(([key, val]) => {
        return {
            id: key,
            link: val.link,
            text: val.text,
        }
    })
    return dataMap
}
export default getMenu
