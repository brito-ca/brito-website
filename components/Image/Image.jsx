import sanitize from 'sanitize-html'

const Image = (props) => {
    const { alt, src, ...restProps } = props

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={sanitize(alt)} src={sanitize(src)} {...restProps} />
    )
}

export default Image
