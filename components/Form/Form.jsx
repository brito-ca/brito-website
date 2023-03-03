import { useState } from 'react'
import styles from '../../styles/Form.module.css'
import { RadioButton } from './RadioButton';
// import britoImage from '../../public/brito.png'

const Form = () => {

    const [fullName, setFullName] = useState('');
    const [expertise, setExpertise] = useState('');
    const [company, setCompany] = useState('');
    const [resideInCanada, setResideInCanada] = useState('yes');

    const radioResideInCanadaChanger = (e) => {
        setResideInCanada(e.target.value);
    };

    return (
        <>
            <hr />
            <div className={styles.formContainer}>
                <h3 className={styles.title}>Want to join Brito's network?</h3>
                <form method="post">
                    <div className={styles.formSections}>
                        <div className={styles.formSectionOne}>
                            {/* Needs to implement * character to mandatory fields */}
                            <label className={styles.labelForm}>Your full name<span className={styles.mandatoryField}>*</span></label>
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
                                <RadioButton
                                    changed={radioResideInCanadaChanger}
                                    id="1"
                                    isSelected={resideInCanada === "yes"}
                                    label="Yes"
                                    value="yes"
                                />
                            </label>
                            <label className={styles.labelForm}>
                                <RadioButton
                                    changed={radioResideInCanadaChanger}
                                    id="2"
                                    isSelected={resideInCanada === "no"}
                                    label="No"
                                    value="no"
                                />
                            </label>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={styles.roundedFormImage} />
                        </div>
                        <div className={styles.formSectionTwo}>
                            <div>
                                <label className={styles.labelForm}>In wich city do you live in Canada?</label>
                                <input
                                    className={styles.inputFormSectionTwo}
                                    placeholder="E.g. Ottawa"
                                    value={fullName}
                                />

                                <label className={styles.labelForm}>
                                    Immigration Status
                                </label>
                                <select className={styles.selectImmigrationStatus}>
                                <option style={{color:'gray'}} value="" disabled selected hidden>Select</option>
                                    <option value="one">Canadian Citizen (Foreign born)</option>
                                    <option value="two">Convention Refugee / Protected Person</option>
                                    <option value="tree">Permanent Resident</option>
                                    <option value="four">Temporary Resident WITHOUT a Work Permit</option>
                                    <option value="five">Temporary Resident WITH a Work Permit</option>
                                    <option value="six">Other</option>
                                </select>
                            </div>
                            <div className={styles.formSectionTree}>
                                <div>
                                    <label className={styles.labelForm}>LinkedIn profile</label>
                                    <input
                                        className={styles.inputFormSectionTwo}
                                        placeholder="Paste your profile link"
                                        value={fullName}
                                    />
                                </div>
                                <div>
                                    <label className={styles.labelForm}>E-mail<span className={styles.mandatoryField}>*</span></label>
                                    <input
                                        className={styles.inputFormSectionTwo}
                                        placeholder="E.g. john@gmail.com"
                                        value={fullName}
                                    />
                                </div>
                            </div>
                            <div className={styles.formSectionTree}>
                                <div>
                                    <label className={styles.labelForm}>Upload photo<span className={styles.mandatoryField}>*</span></label>
                                    <button className='primary outline'>Button text</button> <input style={{}} type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
