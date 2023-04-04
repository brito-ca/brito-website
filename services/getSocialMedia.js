import { SOCIAL_MEDIA_API_URL } from '@/constants/app'

const getSocialMedia = async () => {
    const results = await fetch(SOCIAL_MEDIA_API_URL)
    const result = await results.json()
    const dataMap = Object.entries(result[0].acf.social_media).map(([key, val]) => {
        return {
            id: key,
            link: val,
            icon: key,
        }
    })
    return dataMap
}
export default getSocialMedia
