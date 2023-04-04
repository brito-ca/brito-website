import getMedia from './getMedia'

const getAboutUs = async (data) => {
    const { title, description, numbers, image } = data
    const banner = {
        id: 'about-us',
        title,
        description,
    }
    const cards = Object.values(numbers)
    return {
        banner: banner,
        cards,
        image: await getMedia(image),
    }
}

export default getAboutUs
