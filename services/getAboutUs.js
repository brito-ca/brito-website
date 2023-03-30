const getAboutUs = (data) => {
    const { title, description, numbers } = data
    const banner = {
        id: 'about-us',
        title,
        description,
    }
    const cards = Object.values(numbers)
    return {
        banner: banner,
        cards,
        membersImage: {},
    }
}

export default getAboutUs
