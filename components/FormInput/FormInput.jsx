import styles from '../../styles/FormInput.module.css'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

const FormInput = (props) => {
    const {
        fieldStyle,
        labelContent,
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
                {required && !disabled && <span className={styles.mandatoryFieldSpan}>*</span>}
            </label>
            <input
                type={type}
                required={required}
                disabled={disabled}
                name={name}
                placeholder={placeholder}
                className={`${roboto.className} ${styles.inputForm}`}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default FormInput
