import { BOARD_API_URL } from '@/constants/app'
import getMedia from './getMedia'

const getBoard = async (members) => {
    const results = await fetch(BOARD_API_URL)
    const result = await results.json()
    const data = members
        ? members.map((member) => {
              return result.find((item) => item.id == member)
          })
        : []
    const cards = await Promise.all(
        data.map(async (item) => {
            return {
                image: await getMedia(item.acf?.image),
                title: item.acf.name,
                description: item.acf.description,
                email: item.acf.social.email,
                linkedin: item.acf.social.linkedin,
            }
        })
    )
    return cards
}

export default getBoard
