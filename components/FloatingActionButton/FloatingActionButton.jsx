import styles from '@/styles/FloatingActionButton.module.css'
import { Icon } from '@/components'
import { useScroll } from '@/hooks'
import Link from 'next/link'

const FloatingActionButton = () => {
    const show = useScroll(10)

    return (
        show && (
            <div className={`${styles.fabWrapper} flex-row-center`}>
                <Link href='#'>
                    <Icon width={50} height={50} variant='arrowUp'></Icon>
                </Link>
            </div>
        )
    )
}

export default FloatingActionButton