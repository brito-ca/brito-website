import Link from 'next/link'
import labels from '@/constants/labels.en'

const Nav = (props) => {
    const { className, closeModal } = props

    return (
        <div className={className}>
            <Link href='#about' className='margin' onClick={closeModal}>
                {labels.aboutUs.title}
            </Link>
            <Link href='#join-us' className='margin' onClick={closeModal}>
                {labels.joinUs.title}
            </Link>
            <Link href='#contact' className='margin' onClick={closeModal}>
                {labels.contactUs.title}
            </Link>
        </div>
    )
}

export default Nav
