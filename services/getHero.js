import getMedia from './getMedia'

const getHero = async (data) => {
    const { title, description, image } = data
    return {
        id: 'hero',
        title,
        description,
        image: await getMedia(image),
    }
}

export default getHero
