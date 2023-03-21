import Image from 'next/image'
import { useState } from 'react'
import { RadioButton, Popover, Icon } from '@/components'
import styles from '../../styles/Form.module.css'
import britoFormImage from '../../public/images/brito-group-image-form.svg'
import closeModalIcon from '../../public/images/close-modal-icon.svg'
import logo from '../../public/images/logo-small.svg'
import FormInput from '../FormInput/FormInput'
import Modal from '../Modal/Modal'

const Form = (props) => {
    const { labels, text } = props

    const [formValues, setFormValues] = useState({
        fullName: '',
        expertise: '',
        company: '',
        immigrationStatus: '',
        resideInCanada: 'yes',
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
                alt={text.altImageText}
            />
            <div className={styles.formContainer}>
                <h4 className={styles.formTitle}>{text.title}</h4>
                <form method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.primaryInformation}>
                            <FormInput
                                name='fullName'
                                mandatory='yes'
                                fieldStyle={styles.fullNameField}
                                labelContent={labels.fullNameLabel}
                                labelStyle={styles.labelForm}
                                inputStyle={styles.inputForm}
                                placeholder='E.g Amanda Costa'
                                value={formValues.fullName}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='expertise'
                                fieldStyle={styles.expertiseField}
                                labelContent={labels.expertiseLabel}
                                labelStyle={styles.labelForm}
                                inputStyle={styles.inputForm}
                                placeholder='E.g. UX Designer'
                                value={formValues.expertise}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='company'
                                fieldStyle={styles.companyField}
                                labelContent={labels.companyLabel}
                                labelStyle={styles.labelForm}
                                inputStyle={styles.inputForm}
                                placeholder='E.g. TD bank'
                                value={formValues.company}
                                onChange={handleChange}
                            />

                            <label className={styles.labelForm}>{labels.resideInCanadaLabel}</label>
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
                        <div className={styles.provinceField}>
                            <label htmlFor='province' className={styles.labelForm}>
                                {labels.provinceLabel}
                            </label>

                            <select
                                disabled={formValues.resideInCanada === 'no'}
                                name='province'
                                value={formValues.province}
                                onChange={handleChange}
                                id='province'
                                className={styles.inputForm}
                                required
                            >
                                {text.provinces.map((province) => (
                                    <option key={province.code} value={province.name}>
                                        {province.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <FormInput
                            disabled={formValues.resideInCanada === 'no'}
                            name='city'
                            fieldStyle={styles.cityField}
                            labelContent={labels.cityLabel}
                            labelStyle={styles.labelForm}
                            inputStyle={styles.inputForm}
                            value={formValues.city}
                            placeholder='E.g. Ottawa'
                            onChange={handleChange}
                        />
                        <div className={styles.immigrationStatusSection}>
                            <label htmlFor='immigration-status' className={styles.labelForm}>
                                {labels.statusLabel}
                                <span
                                    className={styles.infoIcon}
                                    onMouseEnter={() => setImmigrationStatusPopover(true)}
                                    onMouseLeave={() => setImmigrationStatusPopover(false)}
                                >
                                    <Icon variant={'exclamation'} className={styles.infoIcon} />
                                    {immigrationStatusPopover && (
                                        <Popover>
                                            <p>{text.statusInformationPopover}</p>
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
                                    {text.immigrationStatus.select}
                                </option>
                                <option key={3} value='Permanent Resident'>
                                    {text.immigrationStatus.permanentResident}
                                </option>
                                <option key={2} value='Student'>
                                    {text.immigrationStatus.student}
                                </option>
                                <option key={1} value='Temporary'>
                                    {text.immigrationStatus.temporary}
                                </option>
                            </select>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.roundedFormImage}
                                src={britoFormImage}
                                alt={text.altImageText}
                            />
                        </div>

                        <FormInput
                            name='linkedinProfileLink'
                            fieldStyle={styles.linkedinField}
                            labelContent={labels.linkedinLabel}
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
                            labelContent={labels.emailLabel}
                            labelStyle={styles.labelForm}
                            inputStyle={styles.inputForm}
                            placeholder='E.g. john@gmail.com'
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <button className={styles.sendButton} type='button' onClick={handleSubmit}>
                            {text.sendButtonText}
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
                                        {text.subscriptionModal.title}
                                    </h1>
                                    <p className={styles.subscriptionModalDescription}>
                                        {text.subscriptionModal.firstLine}
                                    </p>
                                    <p className={styles.subscriptionModalDescription}></p>
                                    {text.subscriptionModal.secondLine}
                                    <button
                                        type='button'
                                        className={styles.continueBrowsingButton}
                                        onClick={() =>
                                            setSubscriptionModalOpen(!subscriptionModalOpen)
                                        }
                                    >
                                        {text.subscriptionModal.continueBrowsingButton}
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
