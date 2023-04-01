import { SOCIAL_MEDIA_API_URL } from '@/constants/app'

const getSocialMedia = async () => {
    const results = await fetch(SOCIAL_MEDIA_API_URL)
    const result = await results.json()
    return [
        { id: 'instagram', link: result[0].acf.social_media.instagram, icon: 'instagram' },
        { id: 'linkedin', link: result[0].acf.social_media.linkedin, icon: 'linkedin' },
        { id: 'facebook', link: result[0].acf.social_media.facebook, icon: 'facebook' },
    ]
}
export default getSocialMedia
