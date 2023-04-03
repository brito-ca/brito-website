import icons from './icons'

const Icon = (props) => {
    const { variant, ...rest } = props
    return <div {...rest}>{icons[variant]}</div>
}

export default Icon
