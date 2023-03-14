import styles from '../../styles/RadioButton.module.css'

const RadioButton = (props) => {
    const { onChange, id, isSelected, label, value, name } = props
    return (
        <div className={styles.radioButton}>
            <input
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                type='radio'
                checked={isSelected}
            />
            <label htmlFor={id} className={styles.labelRadioButton}>
                {label}
            </label>
        </div>
    )
}

export default RadioButton
