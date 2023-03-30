import labels from '@/constants/labels.en'
const getNavigation = () => {
    return [
        {
            id: labels.aboutUs.id,
            title: labels.aboutUs.title,
            navTitle: labels.aboutUs.navTitle,
        },
        {
            id: labels.joinUs.id,
            title: labels.joinUs.title,
            navTitle: labels.joinUs.navTitle,
        },
        {
            id: labels.contactUs.id,
            title: labels.contactUs.title,
            navTitle: labels.contactUs.navTitle,
        },
    ]
}

export default getNavigation
