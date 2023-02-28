import { useState } from 'react'
import styles from '../../styles/Form.module.css'

const Form = () => {

    const [fullName, setFullName] = useState('');
    const [expertise, setExpertise] = useState('');
    const [company, setCompany] = useState('');    

    return (
        <>
            <hr />
            <div className={styles.formContainer}>
                <h3 className={styles.title}>Want to join Brito's network?</h3>
                <form action="" method="post">
                    {/* Needs to implement * character to mandatory fields */ }
                    <label className={styles.labelForm}>Your full name</label>
                    <input
                        className={styles.inputForm}
                        placeholder="E.g. Amanda costa"
                        value={fullName}
                    />
                    <label className={styles.labelForm}>Your expertise</label>
                    <input
                        className={styles.inputForm}
                        placeholder='E.g. UX Designer'
                        value={expertise}
                    />
                    <label className={styles.labelForm}>Your company</label>
                    <input
                        className={styles.inputForm}
                        placeholder='E.g. TD bank'
                        value={expertise}
                    />
                </form>
            </div>
        </>
    )
}

export default Form