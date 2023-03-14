import styles from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <div className={props.fieldStyle}>
            <label className={props.labelStyle}>
                {props.labelContent}
                {props.mandatory === 'yes' ? (
                    <span className={styles.mandatoryFieldSpan}>*</span>
                ) : (
                    ''
                )}
            </label>
            <input
                name={props.name}
                placeholder={props.placeholder}
                className={props.inputStyle}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default FormInput
