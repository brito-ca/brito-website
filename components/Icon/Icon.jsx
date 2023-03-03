import Image from 'next/image'

const Icon = (props) => {
    const { src, alt } = props
    return <Image alt={`${alt} icon`} src={src} />
}
export default Icon
