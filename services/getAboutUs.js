const getAboutUs = (data) => {
    const { title, description, numbers } = data
    const banner = {
        id: 'about-us',
        title,
        description,
    }
    const cards = [
        { icon: 'shield', value: numbers.years, description: 'Years in operation' },
        { icon: 'suitcase', value: numbers.events, description: 'Network events' },
        { icon: 'group', value: numbers.participants, description: 'Participants' },
    ]
    return {
        banner: banner,
        cards,
        membersImage: {},
    }
}

export default getAboutUs
