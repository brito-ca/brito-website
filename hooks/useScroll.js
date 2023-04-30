import { useEffect, useState } from 'react'

const useScroll = (limit) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            const atTheBottom =
                window.innerHeight + window.pageYOffset >= document.body.offsetHeight
            setShow(window.scrollY > limit && !atTheBottom)
        }
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, [limit])

    return show
}

export default useScroll
