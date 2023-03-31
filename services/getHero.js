import useMedia from '@/hooks/useMedia'

const getHero = async (data) => {
    const { title, description, image } = data
    const { data: imageData } = useMedia(image)
    return {
        id: 'hero',
        title,
        description,
        image: imageData,
    }
}

export default getHero
