import icons from './icons'

const Icon = (props) => {
    const { variant } = props
    return <div>{icons[variant]}</div>
}
export default Icon
