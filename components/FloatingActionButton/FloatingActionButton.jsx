import styles from '@/styles/FloatingActionButton.module.css'
import { Icon } from '@/components'
import { useEffect, useState } from 'react'

const FloatingActionButton = () => {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            setHasScrolled(true)
        }
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <>
            {hasScrolled ? (
                <div
                    className={`${styles.fabWrapper} flex-row-center`}
                    onClick={() => void window.screenTop()}
                >
                    <Icon width={50} height={50} variant='arrow-up' />
                </div>
            ) : null}
        </>
    )
}

export default FloatingActionButton
