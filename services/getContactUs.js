import getSocialMedia from './getSocialMedia'

const getContactUs = async (data) => {
    const { title, description, based_in, social_media } = data
    return {
        id: 'contact-us',
        title,
        chat: description.title,
        descriptionChat: description.description,
        email: description.email,
        basedin: based_in.title,
        city: based_in.description,
        visit: social_media.title,
        socialMedia: await getSocialMedia(social_media),
    }
}

export default getContactUs
