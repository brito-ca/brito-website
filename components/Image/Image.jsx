import sanitize from 'sanitize-html'

const Image = (props) => {
    const { alt, src, width, height } = props
    // eslint-disable-next-line @next/next/no-img-element
    return (
        <img
            alt={sanitize(alt)}
            src={sanitize(src)}
            width={sanitize(width)}
            height={sanitize(height)}
        />
    )
}

export default Image
