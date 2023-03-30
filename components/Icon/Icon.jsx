import icons from './lib/icons'

const Icon = (props) => {
    const { variant } = props
    return icons[variant]
}

export default Icon
