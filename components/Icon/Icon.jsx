import Image from 'next/image'
import menu from '../../public/images/menu-icon.svg'
import close from '../../public/images/close-icon.svg'

const getSrc = (variant) => {
    switch (variant) {
        case 'menu':
            return menu
        case 'close':
            return close
    }
}

const Icon = (props) => {
    const { variant } = props
    return <Image alt={`${variant} icon`} src={getSrc(variant)} />
}
export default Icon
