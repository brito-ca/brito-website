import styles from '../../styles/Form.module.css'

const Form = () => {
    return (
        <>
        <hr />
        <div className={styles.formContainer}>
            <h3 className={styles.title}>Want to join Brito's network?</h3>
            <form>
        <p className={styles.label}>Your name</p>
        <input type="text" />
      
            </form>
        </div>
        </>        
    )
}

export default Form