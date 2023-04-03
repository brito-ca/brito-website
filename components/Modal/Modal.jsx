import styles from './Modal.module.css'
import { Icon } from '../index'

const Modal = (props) => {
    const { isOpen, setIsOpen, children, modalId, id } = props

    if (isOpen && modalId === id)
        return (
            <div className={styles.container}>
                <div className={styles.modal}>
                    <div className={styles.button}>
                        <Icon variant='close' onClick={() => setIsOpen(false)} />
                    </div>
                    {children}
                    <div className={styles.actions}>
                        <button className='button primary' onClick={() => setIsOpen(false)}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default Modal
