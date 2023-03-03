import Image from 'next/image'
import menu from '../../public/images/menu-icon.svg'
import close from '../../public/images/close-icon.svg'
import arrowUp from '../../public/images/arrow-up-icon.svg'

const icons = {
    menu,
    close,
    arrowUp,
}

const Icon = (props) => {
    const { variant, width, height } = props
    const size = {}
    if (width) size.width = width
    if (height) size.height = height

    return <Image {...size} alt={`${variant} icon`} src={icons[variant]} />
}
export default Icon
