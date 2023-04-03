/* eslint-disable @next/next/no-img-element */
const Image = (props) => {
    const { alt, ...restProps } = props
    return <img alt={alt} {...restProps} />
}

export default Image
