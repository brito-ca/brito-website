import { useEffect } from 'react'
import styles from './Snackbar.module.css'

const Snackbar = (props) => {
    const { isOpen, setIsOpen, type, message } = props

    useEffect(() => {
        setTimeout(() => {
            setIsOpen((p) => {
                return { ...p, isOpen: false }
            })
        }, 2900)
    }, [])

    if (isOpen) {
        return (
            <div
                className={[styles.snackbar, type == 'danger' ? styles.danger : styles.alert].join(
                    ' '
                )}
            >
                {message}
            </div>
        )
    }
}

export default Snackbar
