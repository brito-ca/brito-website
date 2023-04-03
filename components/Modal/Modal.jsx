import styles from './Modal.module.css'
import { Icon } from '../index'

const Modal = (props) => {
    const { isOpen, setIsOpen, children, actions } = props

    if (!isOpen) return false

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.button}>
                    <Icon variant='close' onClick={() => setIsOpen(false)} />
                </div>
                <div className={'content'}>{children}</div>
                {actions && <div className={styles.actions}>{actions}</div>}
            </div>
        </div>
    )
}

export default Modal
