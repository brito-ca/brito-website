import { MEDIA_API_URL } from '@/constants/app'

const getMedia = async (id) => {
    const results = await fetch(`${MEDIA_API_URL}/${id}`)
    const result = await results.json()
    return {
        src: result.source_url,
        alt: result.alt_text || result.title.rendered || '',
        width: result.media_details.width,
        height: result.media_details.height,
    }
}

export default getMedia
