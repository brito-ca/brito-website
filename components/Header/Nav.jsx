import Link from 'next/link'

const Nav = (props) => {
    const { className, closeModal, navigation } = props
    return (
        <div className={className}>
            {navigation?.map((nav) => (
                <Link
                    key={nav.id}
                    href={nav.link}
                    className='margin'
                    onClick={closeModal}
                    scroll={false}
                >
                    {nav.text}
                </Link>
            ))}
        </div>
    )
}

export default Nav
