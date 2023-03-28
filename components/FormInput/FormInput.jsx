import styles from './FormInput.module.css'

const FormInput = (props) => {
    const {
        fieldStyle,
        labelContent,
        mandatory,
        type,
        required,
        disabled,
        name,
        placeholder,
        value,
        onChange,
    } = props

    return (
        <div className={fieldStyle}>
            <label className={styles.labelForm}>
                {labelContent}
                {mandatory && <span className={styles.mandatoryFieldSpan}>*</span>}
            </label>
            <input
                type={type}
                required={required}
                disabled={disabled}
                name={name}
                placeholder={placeholder}
                className={styles.inputForm}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default FormInput
