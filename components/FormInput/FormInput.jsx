import styles from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <div className={props.formFieldStyle}>
            <label className={props.labelStyle}>
                {props.labelContent}
                {props.mandatory ? <span className={styles.mandatoryFieldSpan}>*</span> : ''}
            </label>
            <input
                placeholder={props.placeholder}
                className={props.inputStyle}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        </div>
    )
}

export default FormInput
