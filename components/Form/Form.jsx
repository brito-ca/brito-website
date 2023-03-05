import Image from 'next/image'
import { useState } from 'react'
import { RadioButton } from '@/components'
import britoFormImage from '../../public/images/brito-group-image-form.svg'

import styles from '../../styles/Form.module.css'

const Form = () => {
    const [fullName, setFullName] = useState('')
    const [expertise, setExpertise] = useState('')
    const [company, setCompany] = useState('')
    const [resideInCanada, setResideInCanada] = useState('yes')
    const [city, setCity] = useState('')
    const [linkedinProfileLink, setLinkedinProfileLink] = useState('')
    const [email, setEmail] = useState('')

    const radioButtonHandler = (e) => {
        setResideInCanada(e.target.value)
    }

    return (
        <>
            <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>Want to join Brito&#39;s network?</h3>
                <form method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.primaryInformation}>
                            <label className={styles.labelForm}>
                                Your full name
                                <span className={styles.mandatoryFieldSpan}>*</span>
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
                                    changed={radioButtonHandler}
                                    id='1'
                                    isSelected={resideInCanada === 'yes'}
                                    label='Yes'
                                    value='yes'
                                />
                            </label>
                            <label className={styles.labelForm}>
                                <RadioButton
                                    changed={radioButtonHandler}
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
                            />
                        </div>
                        <div className={styles.immigrationStatusSection}>
                            <label className={styles.labelForm}>
                                In wich city do you live in Canada?
                            </label>
                            <input
                                className={styles.inputForm}
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
                                className={styles.immigrationStatusList}
                            >
                                <option value='DEFAULT' disabled>
                                    Select
                                </option>
                                <option value='one'>Canadian Citizen (Foreign born)</option>
                                <option value='two'>Convention Refugee / Protected Person</option>
                                <option value='tree'>Permanent Resident</option>
                                <option value='four'>
                                    Temporary Resident WITHOUT a Work Permit
                                </option>
                                <option value='five'>Temporary Resident WITH a Work Permit</option>
                                <option value='six'>Other</option>
                            </select>
                        </div>
                        <div className={styles.linkedinField}>
                            <div>
                                <label className={styles.labelForm}>LinkedIn profile</label>
                                <input
                                    className={styles.inputForm}
                                    placeholder='Paste your profile link'
                                    value={linkedinProfileLink}
                                    onChange={(event) => setLinkedinProfileLink(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.emailField}>
                            <label className={styles.labelForm}>
                                E-mail<span className={styles.mandatoryFieldSpan}>*</span>
                            </label>
                            <input
                                className={styles.inputForm}
                                placeholder='E.g. john@gmail.com'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className={styles.uploadPhotoField}>
                            <label className={styles.labelForm}>
                                Upload photo<span className={styles.mandatoryFieldSpan}>*</span>
                            </label>
                            <button
                                type='button'
                                className={styles.chooseFileButton}
                                onClick={(e) => e.preventDefault()}
                            >
                                Choose file
                            </button>
                        </div>
                        <div className={styles.fileChosenBox}>
                            <p className={styles.chosenBoxText}>No file chosen</p>
                        </div>
                        <button
                            type='button'
                            className={styles.sendButton}
                            onClick={(e) => e.preventDefault()}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form

/* 
 <div className={styles.formSectionOne}>
                            <label className={styles.labelForm}>
                                Your full name
                                <span className={styles.mandatoryFieldSpan}>*</span>
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
                                    changed={radioButtonHandler}
                                    id='1'
                                    isSelected={resideInCanada === 'yes'}
                                    label='Yes'
                                    value='yes'
                                />
                            </label>
                            <label className={styles.labelForm}>
                                <RadioButton
                                    changed={radioButtonHandler}
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
                        <div className={styles.formSectionTwoo}>
                            <label className={styles.labelForm}>
                                In wich city do you live in Canada?
                            </label>
                            <input
                                className={styles.inputForm}
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
                                <option value='two'>Convention Refugee / Protected Person</option>
                                <option value='tree'>Permanent Resident</option>
                                <option value='four'>
                                    Temporary Resident WITHOUT a Work Permit
                                </option>
                                <option value='five'>Temporary Resident WITH a Work Permit</option>
                                <option value='six'>Other</option>
                            </select>
                            <div className={styles.formSectionTree}>
                                <div>
                                    <label className={styles.labelForm}>LinkedIn profile</label>
                                    <input
                                        className={styles.inputForm}
                                        placeholder='Paste your profile link'
                                        value={linkedinProfileLink}
                                        onChange={(event) =>
                                            setLinkedinProfileLink(event.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label className={styles.labelForm}>
                                        E-mail<span className={styles.mandatoryFieldSpan}>*</span>
                                    </label>
                                    <input
                                        className={styles.inputForm}
                                        placeholder='E.g. john@gmail.com'
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.formSectionFour}>
                                <div>
                                    <label className={styles.labelForm}>
                                        Upload photo<span className={styles.mandatoryFieldSpan}>*</span>
                                    </label>
                                    <button
                                        type='button'
                                        className={styles.chooseFileButton}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Choose file
                                    </button>
                                </div>
                                <div className={styles.fileChosenBox}>
                                    <p className={styles.chosenBoxText}>No file chosen</p>
                                </div>
                            </div>
                            <div className={styles.sendButtonSection}>
                                <button
                                    type='button'
                                    className={styles.sendButton}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Send
                                </button>
                            </div>
                        </div>

*/
