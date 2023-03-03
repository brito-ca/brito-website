import { useEffect, useState } from 'react'

const useScroll = (limit) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            setShow(window.scrollY > limit)
        }
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [limit])

    return show
}

export default useScroll
