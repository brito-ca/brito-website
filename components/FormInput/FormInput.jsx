import styles from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <div className={props.fieldStyle}>
            <label className={styles.labelForm}>
                {props.labelContent}
                {props.mandatory && <span className={styles.mandatoryFieldSpan}>*</span>}
            </label>
            <input
                name={props.name}
                placeholder={props.placeholder}
                className={styles.inputForm}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default FormInput
