import styles from '@/styles/FloatingActionButton.module.css'
import { Icon } from '@/components'
import { useEffect, useState } from 'react'

const FloatingActionButton = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            setShow(window.scrollY > 10)
        }
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [])

    return (
        <>
            {show ? (
                <div
                    className={`${styles.fabWrapper} flex-row-center`}
                    onClick={() => void window.scrollTo({ top: 0 })}
                >
                    <Icon width={50} height={50} variant='arrow-up' />
                </div>
            ) : null}
        </>
    )
}

export default FloatingActionButton
