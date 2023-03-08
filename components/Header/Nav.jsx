import Link from 'next/link'

const Nav = (props) => {
    const { className, closeModal, navigation } = props

    return (
        <div className={className}>
            {navigation.map((nav) => (
                <Link key={nav.id} href={`#${nav.id}`} className='margin' onClick={closeModal}>
                    {nav.title}
                </Link>
            ))}
        </div>
    )
}

export default Nav
