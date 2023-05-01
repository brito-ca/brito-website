import styles from '@/styles/Footer.module.css'
import { Logo, Modal, Nav } from '@/components'
import { useState } from 'react'

const Footer = (props) => {
    const { content, navigation } = props
    const { description, links } = content
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalId, setModalId] = useState()

    const handleModal = (e) => {
        e.preventDefault()
        setModalId(parseInt(e.target.id))
        setIsModalOpen(true)
    }

    return (
        <div className={`${styles.container} flex-column-center`}>
            <div className={styles.footerContainer}>
                <div className={`${styles.footerLogoContainer}`}>
                    <div className='flex-column-space-between'>
                        <Logo size='lg' />
                        <p className={'vertical-padding'}>{description}</p>
                    </div>
                </div>
                <div className={styles.footerNav}>
                    <Nav className={`${styles.nav} body3`} navigation={navigation} />
                </div>
            </div>
            <div className={styles?.footerBottom}>
                <p className={styles?.footerBottomItem}>{content?.copyright}</p>
                <p className={styles?.footerBottomItem}>{content?.rights}</p>
                {links?.map((link) => {
                    return (
                        <div key={link.id} className={styles?.footerBottomItem}>
                            <a href='#' id={link.id} onClick={(e) => handleModal(e)}>
                                {link.title}
                            </a>
                            <Modal
                                id={link.id}
                                isOpen={isModalOpen}
                                setIsOpen={setIsModalOpen}
                                modalId={modalId}
                            >
                                <div className='padding-lg'>
                                    <h3>{link.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: link.content }} />
                                </div>
                            </Modal>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer
