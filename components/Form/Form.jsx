import Image from 'next/image'
import { useState } from 'react'
import { RadioButton, Popover, Icon } from '@/components'
import styles from '../../styles/Form.module.css'
import britoFormImage from '../../public/images/brito-group-image-form.svg'
import closeModalIcon from '../../public/images/close-modal-icon.svg'
import logo from '../../public/images/logo-small.svg'
import FormInput from '../FormInput/FormInput'
import Modal from '../Modal/Modal'

const Form = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        expertise: '',
        company: '',
        immigrationStatus: '',
        resideInCanada: '',
        province: '',
        city: '',
        linkedinProfileLink: '',
        email: '',
    })

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Opens up modal - implement a loading mechanism that awaits for the sucessfull post request and a visual reprensetation of the loading ( forgot the name of it)
        setSubscriptionModalOpen(!subscriptionModalOpen)
        // ** Line below is for testing purposes **
        // console.log(formValues)
    }

    const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false)
    const [immigrationStatusPopover, setImmigrationStatusPopover] = useState(false)

    return (
        <div>
            <Image
                className={`${styles.mobileFormImage} ${styles.roundedFormImage} vertical-margin-md`}
                src={britoFormImage}
                alt='Picture of members of BRITO co-working in their computers in one of the meetings '
            />
            <div className={styles.formContainer}>
                <h4 className={styles.formTitle}>Want to join Brito&#39;s network?</h4>
                <form method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.primaryInformation}>
                            <FormInput
                                name='fullName'
                                mandatory='yes'
                                fieldStyle={styles.fullNameField}
                                labelContent='Your full name'
                                labelStyle={styles.labelForm}
                                inputStyle={styles.inputForm}
                                placeholder='E.g Amanda Costa'
                                value={formValues.fullName}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='expertise'
                                fieldStyle={styles.expertiseField}
                                labelContent='Your expertise'
                                labelStyle={styles.labelForm}
                                inputStyle={styles.inputForm}
                                placeholder='E.g. UX Designer'
                                value={formValues.expertise}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='company'
                                fieldStyle={styles.companyField}
                                labelContent='Your company'
                                labelStyle={styles.labelForm}
                                inputStyle={styles.inputForm}
                                placeholder='E.g. TD bank'
                                value={formValues.company}
                                onChange={handleChange}
                            />

                            <label className={styles.labelForm}>
                                Do you currently live in Canada?
                            </label>
                            <RadioButton
                                name='resideInCanada'
                                onChange={handleChange}
                                id='1'
                                isSelected={formValues.resideInCanada === 'yes'}
                                label='Yes'
                                value='yes'
                            />
                            <RadioButton
                                name='resideInCanada'
                                onChange={handleChange}
                                id='2'
                                isSelected={formValues.resideInCanada === 'no'}
                                label='No'
                                value='no'
                            />
                        </div>
                        <FormInput
                            required
                            disabled={formValues.resideInCanada === 'no'}
                            name='province'
                            fieldStyle={styles.provinceField}
                            labelContent='Province / Territory'
                            labelStyle={styles.labelForm}
                            inputStyle={styles.inputForm}
                            value={formValues.province}
                            placeholder='E.g. Ontario'
                            onChange={handleChange}
                        />
                        <FormInput
                            disabled={formValues.resideInCanada === 'no'}
                            name='city'
                            fieldStyle={styles.cityField}
                            labelContent='City'
                            labelStyle={styles.labelForm}
                            inputStyle={styles.inputForm}
                            value={formValues.city}
                            placeholder='E.g. Ottawa'
                            onChange={handleChange}
                        />
                        <div className={styles.immigrationStatusSection}>
                            <label htmlFor='immigration-status' className={styles.labelForm}>
                                What&#39;s your current status?
                                <span
                                    className={styles.infoIcon}
                                    onMouseEnter={() => setImmigrationStatusPopover(true)}
                                    onMouseLeave={() => setImmigrationStatusPopover(false)}
                                >
                                    <Icon variant={'exclamation'} className={styles.infoIcon} />
                                    {immigrationStatusPopover && (
                                        <Popover>
                                            <p>
                                                This status assists Brito in identifying suitable
                                                projects and job opportunities based on his type of
                                                visa. Some visas only permit 20 hours of work, and
                                                holding citizenship is a requirement for certain
                                                government positions, enhancing chances of securing
                                                a job.
                                            </p>
                                        </Popover>
                                    )}
                                </span>
                            </label>

                            <select
                                disabled={formValues.resideInCanada === 'no'}
                                name='immigrationStatus'
                                value={formValues.immigrationStatus}
                                onChange={handleChange}
                                id='immigration-status'
                                className={styles.inputForm}
                                required
                            >
                                <option value='' disabled>
                                    Select
                                </option>
                                <option key={3} value='Permanent Resident'>
                                    Permanent Resident
                                </option>
                                <option key={2} value='Convention Refugee / Protected Person'>
                                    Student
                                </option>
                                <option key={1} value='Canadian Citizen (Foreign born)'>
                                    Temporary
                                </option>
                            </select>
                        </div>
                        {/* )} */}
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.roundedFormImage}
                                src={britoFormImage}
                                alt='Picture of members of BRITO co-working in their computers in one of the meetings '
                            />
                        </div>

                        <FormInput
                            name='linkedinProfileLink'
                            fieldStyle={styles.linkedinField}
                            labelContent='LinkedIn profile'
                            labelStyle={styles.labelForm}
                            inputStyle={styles.inputForm}
                            placeholder='Paste your profile link'
                            value={formValues.linkedinProfileLink}
                            onChange={handleChange}
                        />

                        <FormInput
                            name='email'
                            type='email'
                            mandatory='yes'
                            fieldStyle={styles.emailField}
                            labelContent='E-mail'
                            labelStyle={styles.labelForm}
                            inputStyle={styles.inputForm}
                            placeholder='E.g. john@gmail.com'
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <button className={styles.sendButton} type='button' onClick={handleSubmit}>
                            Send
                        </button>
                        {subscriptionModalOpen && (
                            <Modal className={styles.subscriptionModalContainer}>
                                <Image
                                    src={closeModalIcon}
                                    alt='X icon to close upload photo field'
                                    className={styles.closeModalIcon}
                                    onClick={() => setSubscriptionModalOpen(!subscriptionModalOpen)}
                                />
                                <Image
                                    src={logo}
                                    alt="Brito's logo"
                                    className={styles.logoSubscriptionModal}
                                />
                                <div className={styles.subscriptionModalTextDescriptionContainer}>
                                    <h1 className={styles.subscriptionModalTitle}>
                                        Thank you for connect with us!
                                    </h1>
                                    <p className={styles.subscriptionModalDescription}>
                                        Your informations were submitted for approval.
                                    </p>
                                    <p className={styles.subscriptionModalDescription}>
                                        You will receive a notification on your email.
                                    </p>
                                    <button
                                        type='button'
                                        className={styles.continueBrowsingButton}
                                        onClick={() =>
                                            setSubscriptionModalOpen(!subscriptionModalOpen)
                                        }
                                    >
                                        Continue browsing
                                    </button>
                                </div>
                            </Modal>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
