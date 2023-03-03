const Nav = (props) => {
    const { className, closeModal } = props

    return (
        <div className={className}>
            <a href='#about' className='margin' onClick={closeModal}>
                About
            </a>
            <a href='#join-us' className='margin' onClick={closeModal}>
                Join us
            </a>
            <a href='#contact' className='margin' onClick={closeModal}>
                Contact
            </a>
        </div>
    )
}

export default Nav
