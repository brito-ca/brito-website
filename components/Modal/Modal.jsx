import styles from '../../styles/Modal.module.css'
import { Icon } from '../index'
import { useEffect } from 'react'

const Modal = (props) => {
    const { isOpen, setIsOpen, children, modalId, id, actions } = props

    useEffect(() => {
        document.body.style.overflow = !isOpen ? 'scroll' : 'hidden'
    }, [isOpen])

    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscapeKey)
        return () => document.removeEventListener('keydown', handleEscapeKey)
    }, [setIsOpen])

    if (isOpen && modalId === id)
        return (
            <div
                onClick={() => {
                    setIsOpen(false)
                }}
            >
                <div className={styles.container}>
                    <div
                        className={styles.modal}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <div className={styles.button}>
                            <Icon variant='close' onClick={() => setIsOpen(false)} />
                        </div>
                        <div className={styles.content}>{children}</div>
                        {actions && <div className={styles.actions}>{actions}</div>}
                    </div>
                </div>
            </div>
        )
}

export default Modal
