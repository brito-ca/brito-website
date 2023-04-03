import styles from '@/styles/Footer.module.css'
import { Logo, Modal, Nav } from '@/components'
import { useState } from 'react'

const Footer = (props) => {
    const { content, navigation } = props
    const { title, description, links } = content
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalId, setModalId] = useState()

    const handleModal = (e) => {
        e.preventDefault()
        setModalId(parseInt(e.target.id))
        setIsModalOpen(true)
    }

    return (
        <>
            <div className={styles.footerContainer}>
                <div className={`${styles.footerLogoContainer} flex-column-center`}>
                    <div className='flex-column-space-between'>
                        <Logo size='lg' />
                        <p className={'vertical-padding'}>{description}</p>
                    </div>
                </div>
                <div className={styles.footerNav}>
                    <h5>{title}</h5>
                    <Nav
                        className={`${styles.nav} body3 flex-column-start`}
                        navigation={navigation}
                    />
                </div>
            </div>
            <div
                className={`${styles?.footerBottom} vertical-padding flex-row-space-between body5`}
            >
                <p>{content?.copyright}</p>
                <div className='flex-row-center'>
                    <p>{content?.rights}</p>
                </div>
                <div className='links'>
                    {links.map((link) => {
                        return (
                            <div className='link' key={link.id}>
                                <a href='#' id={link.id} onClick={(e) => handleModal(e)}>
                                    {link.title}
                                </a>
                                <Modal
                                    id={link.id}
                                    isOpen={isModalOpen}
                                    setIsOpen={setIsModalOpen}
                                    modalId={modalId}
                                >
                                    <h3>{link.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: link.content }} />
                                </Modal>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Footer
