import { FIELDS_API_URL } from '@/constants/app'

const getField = async (id) => {
    const results = await fetch(`${FIELDS_API_URL}/${id}`)
    const result = await results.json()
    return result.acf
}
export default getField