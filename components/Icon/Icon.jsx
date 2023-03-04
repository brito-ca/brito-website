import icons from './icons'

const Icon = (props) => {
    const { variant, width, height } = props
    const size = { width, height }
    return <div {...size}>{icons[variant]}</div>
}
export default Icon
