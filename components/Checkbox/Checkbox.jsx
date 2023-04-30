import styles from '../../styles/Checkbox.module.css'

const Checkbox = (props) => {
    const { onChange, id, label, value, name } = props
    return (
        <div className={styles.checkbox}>
            <input id={id} name={name} onChange={onChange} checked={value} type='checkbox' />
            <label htmlFor={id} className={styles.labelCheckbox}>
                {label}
            </label>
        </div>
    )
}

export default Checkbox
