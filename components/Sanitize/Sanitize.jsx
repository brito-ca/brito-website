import * as DOMPurify from 'dompurify';

const Sanitize = (props) => {
    const {input} = props;
    return(
        <div dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(input)
      }} />
    );
    
}; export default Sanitize