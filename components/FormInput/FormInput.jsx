import styles from './FormInput.module.css'

const FormInput = (props) => {
    console.log(props.name)
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
                onChange={(e) => props.setValue(e.target.value)}
            />
        </div>
    )
}

export default FormInput
