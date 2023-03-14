import styles from '@/styles/FloatingActionButton.module.css'
import { Icon } from '@/components'
import { useScroll } from '@/hooks'

const FloatingActionButton = () => {
    const show = useScroll(10)

    return (
        show && (
            <div className={`${styles.fabWrapper} flex-row-center`}>
                <a href='#'>
                    <Icon variant='arrowUp' />
                </a>
            </div>
        )
    )
}

export default FloatingActionButton
