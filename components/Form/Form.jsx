import { useState } from 'react'
import styles from '../../styles/Form.module.css'
// import britoImage from '../../public/brito.png'

const Form = () => {

    const [fullName, setFullName] = useState('');
    const [expertise, setExpertise] = useState('');
    const [company, setCompany] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    function handleCheckBox() {
        if (!checkBox) setCheckBox (true) 
        if (checkBox) setCheckBox (false)
     }

    return (
        <>
            <hr />
            <div className={styles.formContainer}>
                <h3 className={styles.title}>Want to join Brito's network?</h3>
                <form method="post">
                    <div className={styles.formDivider}>
                        <div>
                            {/* Needs to implement * character to mandatory fields */}
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
                            <label className={styles.labelForm}>Are you residing in Canada?</label>
                            <label className={styles.labelForm}>
                                <input
                                    type="checkbox"
                                    checked={checkBox}
                                    onChange={handleCheckBox}
                                />
                                Yes
                            </label>
                            <label className={styles.labelForm}>
                                <input
                                    type="checkbox"
                                    checked={checkBox}
                                    onChange={handleCheckBox}
                                />
                                No
                            </label>
                        </div>
                        <div>
                            <img className={styles.roundedFormImage} />
                        </div>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form