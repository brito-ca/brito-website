import sanitizeHtml from 'sanitize-html'

const Sanitize = (props) => {
    const {input} = props

    return(
       sanitizeHtml(input)
    );
    
}; export default Sanitize