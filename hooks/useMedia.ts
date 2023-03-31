import { MEDIA_API_URL } from '@/constants/app'
import fetcher from '@/services/fetcher'
import useSWR from 'swr'

const useMedia = (id) => {
    const { data, error, isLoading } = useSWR(`${MEDIA_API_URL}/${id}`, fetcher)
    return {
        data,
        error,
        isLoading,
    }
}

export default useMedia
