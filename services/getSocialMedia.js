import labels from '@/constants/labels.en'
const getSocialMedia = () => {
    return [
        { id: 'instagram', link: labels.media.instagramlink, icon: 'instagram' },
        { id: 'linkedin', link: labels.media.linklinkedin, icon: 'linkedin' },
        { id: 'facebook', link: labels.media.linkfacebook, icon: 'facebook' },
    ]
}
export default getSocialMedia
