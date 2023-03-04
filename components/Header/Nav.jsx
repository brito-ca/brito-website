import Link from 'next/link'

const Nav = (props) => {
    const { className, closeModal } = props

    return (
        <div className={className}>
            <Link href='#about' className='margin' onClick={closeModal}>
                About
            </Link>
            <Link href='#join-us' className='margin' onClick={closeModal}>
                Join us
            </Link>
            <Link href='#contact' className='margin' onClick={closeModal}>
                Contact
            </Link>
        </div>
    )
}

export default Nav
