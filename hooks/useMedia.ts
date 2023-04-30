import { MEDIA_API_URL } from '@/constants/app'
import fetcher from '@/services/fetcher'
import useSWR from 'swr'

const useMedia = (id) => {
    const { data, error, isLoading } = useSWR(`${MEDIA_API_URL}/${id}`, fetcher)
    const image = {
        src: data?.source_url,
        alt: data?.alt_text || '',
        height: data?.media_details?.height,
        width: data?.media_details?.width,
    }
    return {
        data: image,
        error,
        isLoading,
    }
}

export default useMedia
