const Image = (props) => {
    const { alt, ...restProps } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...restProps} />
}

export default Image
