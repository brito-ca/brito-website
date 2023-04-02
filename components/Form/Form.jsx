import Image from 'next/image'
import { useState } from 'react'
import { Popover, Icon, Modal, FormInput, Checkbox } from '@/components'
import styles from '../../styles/Form.module.css'
import britoFormImage from '../../public/images/brito-group-image-form.svg'
import logo from '../../public/images/logo-small.svg'

const Form = (props) => {
    const { fields } = props
    const [formValues, setFormValues] = useState({
        full_name: '',
        expertise: '',
        company: '',
        residein_canada: false,
        province: '',
        city: '',
        immigration_status: '',
        linkedin_profile: '',
        email: '',
    })

    const handleResideInCanada = () => {
        setResideInCanada(!resideInCanada)
        setFormValues({
            ...formValues,
            province: 'Alberta',
            residein_canada: !resideInCanada,
        })
    }

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formDataJSON = JSON.stringify(formValues)
        const api = 'https://brito.it/wp-json/wp/v2/member'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formDataJSON,
        }

        const res = await fetch(api, options)
        if (res.status === 200) {
            setSubscriptionModalOpen(!subscriptionModalOpen)
            setFormValues({
                full_name: '',
                expertise: '',
                company: '',
                residein_canada: false,
                province: '',
                city: '',
                immigration_status: '',
                linkedin_profile: '',
                email: '',
            })
        } else {
            alert(
                `Error: ${res.status} ${res.statusText}  \nSomething went wrong. Please try again.`
            )
        }
    }

    const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false)
    const [immigrationStatusPopover, setImmigrationStatusPopover] = useState(false)
    const [resideInCanada, setResideInCanada] = useState(false)

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
                                name='full_name'
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
                                placeholder={fields.company.placeholder}
                                value={formValues.company}
                                onChange={handleChange}
                            />

                            <label className={styles.labelForm}>
                                {fields.resideInCanada.label}
                            </label>
                            <Checkbox
                                name='residein_canada'
                                onChange={handleResideInCanada}
                                id='1'
                                label='Yes'
                                value={resideInCanada}
                            />
                        </div>
                        <div className={styles.provinceField}>
                            <label htmlFor='province' className={styles.labelForm}>
                                {fields.province.label}
                            </label>

                            <select
                                disabled={!formValues.residein_canada}
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
                            disabled={!formValues.residein_canada}
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
                                disabled={!formValues.residein_canada}
                                name='immigration_status'
                                value={formValues.immigration_status}
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
                            name='linkedin_profile'
                            fieldStyle={styles.linkedinField}
                            labelContent={fields.linkedin.label}
                            placeholder={fields.linkedin.placeholder}
                            value={formValues.linkedinProfileLink}
                            onChange={handleChange}
                        />

                        <FormInput
                            name='email'
                            mandatory='yes'
                            fieldStyle={styles.emailField}
                            labelContent={fields.email.label}
                            placeholder={fields.email.placeholder}
                            value={formValues.email}
                            onChange={handleChange}
                        />

                        <button className={styles.sendButton} type='button' onClick={handleSubmit}>
                            {fields.sendButton}
                        </button>
                        <Modal
                            className={styles.subscriptionModalContainer}
                            isOpen={subscriptionModalOpen}
                            setIsOpen={setSubscriptionModalOpen}
                        >
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
                                    onClick={() => setSubscriptionModalOpen(!subscriptionModalOpen)}
                                >
                                    {fields.subscriptionModal.continueBrowsing}
                                </button>
                            </div>
                        </Modal>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
