import styles from './Modal.module.css'
import { Icon } from '../index'
import { useEffect } from 'react'

const Modal = (props) => {
    const { isOpen, setIsOpen, children, modalId, id, actions, modalPadding } = props

    useEffect(() => {
        document.body.style.overflow = !isOpen ? 'scroll' : 'hidden'
    }, [isOpen])

    if (isOpen && modalId === id)
        return (
            <div className={styles.container}>
                <div className={`${modalPadding ? styles.modalPadding : ''} ${styles.modal}`}>
                    <div className={styles.button}>
                        <Icon variant='close' onClick={() => setIsOpen(false)} />
                    </div>
                    <div className={`${modalPadding ? styles.modalPadding : ''} ${styles.content}`}>
                        {children}
                    </div>
                    {actions && <div className={styles.actions}>{actions}</div>}
                </div>
            </div>
        )
}

export default Modal
