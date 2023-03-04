import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Form.module.css'
import { RadioButton } from './RadioButton'
import britoFormImage from '../../public/brito-group-image-form.svg'

const Form = () => {
    const [fullName, setFullName] = useState('')
    const [expertise, setExpertise] = useState('')
    const [company, setCompany] = useState('')
    const [resideInCanada, setResideInCanada] = useState('yes')
    const [city, setCity] = useState('')
    const [linkedinProfileLink, setLinkedinProfileLink] = useState('')
    const [email, setEmail] = useState('')

    const radioResideInCanadaChanger = (e) => {
        setResideInCanada(e.target.value)
    }

    return (
        <>
            <div className={styles.formContainer}>
                <h3 className={styles.title}>Want to join Brito&#39;s network?</h3>
                <form method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.formSectionOne}>
                            <label className={styles.labelForm}>
                                Your full name
                                <span className={styles.mandatoryField}>*</span>
                            </label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. Amanda costa'
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                            />
                            <label className={styles.labelForm}>Your expertise</label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. UX Designer'
                                value={expertise}
                                onChange={(event) => setExpertise(event.target.value)}
                            />
                            <label className={styles.labelForm}>Your company</label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. TD bank'
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
                            />
                            <label className={styles.labelForm}>Are you residing in Canada?</label>
                            <label className={styles.labelForm}>
                                <RadioButton
                                    changed={radioResideInCanadaChanger}
                                    id='1'
                                    isSelected={resideInCanada === 'yes'}
                                    label='Yes'
                                    value='yes'
                                />
                            </label>
                            <label className={styles.labelForm}>
                                <RadioButton
                                    changed={radioResideInCanadaChanger}
                                    id='2'
                                    isSelected={resideInCanada === 'no'}
                                    label='No'
                                    value='no'
                                />
                            </label>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.roundedFormImage}
                                src={britoFormImage}
                                alt='Picture of members of BRITO co-working in their computers in one of the meetings '
                                width={800}
                                height={500}
                            />
                        </div>
                        <div className={styles.formSectionTwo}>
                            <div>
                                <label className={styles.labelForm}>
                                    In wich city do you live in Canada?
                                </label>
                                <input
                                    className={styles.inputFormSectionTwo}
                                    placeholder='E.g. Ottawa'
                                    value={city}
                                    onChange={(event) => setCity(event.target.value)}
                                />

                                <label htmlFor='immigration-status' className={styles.labelForm}>
                                    Immigration Status
                                </label>
                                <select
                                    id='immigration-status'
                                    defaultValue={'DEFAULT'}
                                    className={styles.selectImmigrationStatus}
                                >
                                    <option value='DEFAULT' disabled>
                                        Select
                                    </option>
                                    <option value='one'>Canadian Citizen (Foreign born)</option>
                                    <option value='two'>
                                        Convention Refugee / Protected Person
                                    </option>
                                    <option value='tree'>Permanent Resident</option>
                                    <option value='four'>
                                        Temporary Resident WITHOUT a Work Permit
                                    </option>
                                    <option value='five'>
                                        Temporary Resident WITH a Work Permit
                                    </option>
                                    <option value='six'>Other</option>
                                </select>
                            </div>
                            <div className={styles.formSectionTree}>
                                <div>
                                    <label className={styles.labelForm}>LinkedIn profile</label>
                                    <input
                                        className={styles.inputFormSectionTwo}
                                        placeholder='Paste your profile link'
                                        value={linkedinProfileLink}
                                        onChange={(event) =>
                                            setLinkedinProfileLink(event.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={styles.labelForm}>
                                        E-mail<span className={styles.mandatoryField}>*</span>
                                    </label>
                                    <input
                                        className={styles.inputFormSectionTwo}
                                        placeholder='E.g. john@gmail.com'
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.formSectionTree}>
                                <div>
                                    <label className={styles.labelForm}>
                                        Upload photo<span className={styles.mandatoryField}>*</span>
                                    </label>
                                    <button
                                        type='button'
                                        className={styles.chooseFileButton}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Choose file
                                    </button>
                                </div>
                                <div>
                                    <p className={styles.fileChosenBox}>No file chosen</p>
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
