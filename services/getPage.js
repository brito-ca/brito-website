import { PAGE_API_URL } from '@/constants/app'

const getPage = async (id) => {
    const results = await fetch(`${PAGE_API_URL}/${id}`)
    const result = await results.json()
    return result
}
export default getPage
