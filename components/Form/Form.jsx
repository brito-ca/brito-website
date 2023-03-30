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
    const { fields } = props

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

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubscriptionModalOpen(!subscriptionModalOpen)
    }

    const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false)
    const [immigrationStatusPopover, setImmigrationStatusPopover] = useState(false)

    return (
        <div>
            <Image
                className={`${styles.mobileFormImage} ${styles.roundedFormImage} vertical-margin-md`}
                src={britoFormImage}
                alt={'Brito group form image'}
            />
            <div className={styles.formContainer}>
                <h4 className={styles.formTitle}>{fields.title}</h4>
                <form method='post'>
                    <div className={styles.formSections}>
                        <div className={styles.primaryInformation}>
                            <FormInput
                                name='fullName'
                                mandatory='yes'
                                fieldStyle={styles.fullNameField}
                                labelContent={fields.fullName.label}
                                placeholder='E.g Amanda Costa'
                                value={formValues.fullName}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='expertise'
                                fieldStyle={styles.expertiseField}
                                labelContent={fields.expertise.label}
                                placeholder='E.g. UX Designer'
                                value={formValues.expertise}
                                onChange={handleChange}
                            />
                            <FormInput
                                name='company'
                                fieldStyle={styles.companyField}
                                labelContent={fields.company.label}
                                placeholder='E.g. TD bank'
                                value={formValues.company}
                                onChange={handleChange}
                            />

                            <label className={styles.labelForm}>
                                {fields.resideInCanada.label}
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
                        <div className={styles.provinceField}>
                            <label htmlFor='province' className={styles.labelForm}>
                                {fields.province.label}
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
                                {fields.province.provinces.map((province) => (
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
                            labelContent={fields.city.label}
                            value={formValues.city}
                            placeholder='E.g. Ottawa'
                            onChange={handleChange}
                        />
                        <div className={styles.immigrationStatusSection}>
                            <label htmlFor='immigration-status' className={styles.labelForm}>
                                {fields.immigrationStatus.label}
                                <span
                                    className={styles.infoIcon}
                                    onMouseEnter={() => setImmigrationStatusPopover(true)}
                                    onMouseLeave={() => setImmigrationStatusPopover(false)}
                                >
                                    <Icon variant={'exclamation'} className={styles.infoIcon} />
                                    {immigrationStatusPopover && (
                                        <Popover>
                                            <p>{fields.statusInformationPopover}</p>
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
                                {fields.immigrationStatus.values.map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.roundedFormImage}
                                src={britoFormImage}
                                alt={'Form image'}
                            />
                        </div>

                        <FormInput
                            name='linkedinProfileLink'
                            fieldStyle={styles.linkedinField}
                            labelContent={fields.linkedin.label}
                            placeholder='Paste your profile link'
                            value={formValues.linkedinProfileLink}
                            onChange={handleChange}
                        />

                        <FormInput
                            name='email'
                            mandatory='yes'
                            fieldStyle={styles.emailField}
                            labelContent={fields.email.label}
                            placeholder='E.g. john@gmail.com'
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <button className={styles.sendButton} type='button' onClick={handleSubmit}>
                            {fields.sendButton}
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
                                        {fields.subscriptionModal.title}
                                    </h1>
                                    <p className={styles.subscriptionModalDescription}>
                                        {fields.subscriptionModal.approval}
                                    </p>
                                    <p className={styles.subscriptionModalDescription}></p>
                                    {fields.subscriptionModal.notification}
                                    <button
                                        type='button'
                                        className={styles.continueBrowsingButton}
                                        onClick={() =>
                                            setSubscriptionModalOpen(!subscriptionModalOpen)
                                        }
                                    >
                                        {fields.subscriptionModal.continueBrowsing}
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
