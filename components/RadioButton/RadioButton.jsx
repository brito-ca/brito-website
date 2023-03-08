import styles from '../../styles/RadioButton.module.css'

const RadioButton = (props) => {
    const { changed, id, isSelected, label, value } = props
    return (
        <div className={styles.radioButton}>
            <input id={id} onChange={changed} value={value} type='radio' checked={isSelected} />
            <label htmlFor={id} className={styles.labelRadioButton}>
                {label}
            </label>
        </div>
    )
}

export default RadioButton
